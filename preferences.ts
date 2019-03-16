const electron = require('electron');
const path = require('path');
const fs = require('fs');

type Settings = {
	dimensions: Electron.Rectangle;
};

type Opts = {
	configName: string;
	defaults: Settings;
};

export class Preferences {
	private path: string;
	private data: Settings;

	constructor(opts: Opts) {
		// Renderer process has to get `app` module via `remote`, whereas the main process can get it directly
		// app.getPath('userData') will return a string of the user's app data directory path.
		const userDataPath = (electron.app || electron.remote.app).getPath('userData');
		// We'll use the `configName` property to set the file name and path.join to bring it all together as a string
		this.path = path.join(userDataPath, opts.configName + '.json');

		this.data = parseDataFile(this.path, opts.defaults);
	}

	public get(key: keyof Settings) {
		return this.data[key];
	}

	public set(key: keyof Settings, val: any) {
		this.data[key] = val;
		fs.writeFileSync(this.path, JSON.stringify(this.data));
	}
}

function parseDataFile(filePath: string, defaults: Settings): Settings {
	try {
		return JSON.parse(fs.readFileSync(filePath));
	} catch (error) {
		return defaults;
	}
}
