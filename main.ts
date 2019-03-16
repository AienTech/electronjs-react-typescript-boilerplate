import { BrowserWindow, app } from 'electron';
import { Preferences } from './preferences';

export const preferences = new Preferences({
	configName: 'serverman-preferences',
	defaults: {
		dimensions: {
			height: 600,
			width: 800,
			x: undefined,
			y: undefined,
		},
	},
});

class Main {
	static mainWindow: Electron.BrowserWindow;
	static application: Electron.App;
	static BrowserWindow;
	private static onWindowAllClosed() {
		if (process.platform !== 'darwin') {
			Main.application.quit();
		}
	}

	private static onClose() {
		// Dereference the window object.
		Main.mainWindow = null;
	}

	private static onReady() {
		let { height, width } = preferences.get('dimensions');

		Main.mainWindow = new Main.BrowserWindow({ width: width, height: height });
		Main.mainWindow.setMenu(null);
		Main.mainWindow.webContents.openDevTools();
		Main.mainWindow.loadURL('file://' + __dirname + '/index.html');
		Main.mainWindow.on('closed', Main.onClose);
		Main.mainWindow.on('resize', () => {
			let bounds = Main.mainWindow.getBounds();
			preferences.set('dimensions', bounds);
		});
	}

	static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
		// we pass the Electron.App object and the
		// Electron.BrowserWindow into this function
		// so this class has no dependencies. This
		// makes the code easier to write tests for
		Main.BrowserWindow = browserWindow;
		Main.application = app;
		Main.application.on('window-all-closed', Main.onWindowAllClosed);
		Main.application.on('ready', Main.onReady);
	}
}

Main.main(app, BrowserWindow);
