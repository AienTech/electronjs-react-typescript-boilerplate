# ERT Boilerplate

This is a simple [Electron](https://electronjs.org/), [React.js](https://reactjs.org/), [React-Router](https://reacttraining.com/react-router/web/guides/quick-start) and [Typescript](https://www.typescriptlang.org/) setup based on the [Electrate](https://github.com/mmick66/electrate). It is designed to work without the need of a development server running in the background and typescript configurations.

## Installing

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/AienTech/electrongjs-react-typescript-boilerpalte my-app
# Go into the repository
cd my-app
# Install dependencies
npm install
```

## Running

```
npm run start
```

## Testing

The tool of choice is [Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html) as used at Facebook. Create files with the extension `*.test.js` and they will be run through

```
npm run test
```

## Packaging

Replace the icon inside the `build` folder and run

```bash
npm run release
```

Check the `dist` folder for the app


## How Electron Works with React

This template transpiles all `*.ts` files in `src` into standard JS (commonjs) to `app`. There it includes `*.html` and `*.css` together with the `main.js` start file. From then it runs and packages using `gulp` as run through `npm`.

## Structure

there are 3 main files to lookout for:

- `main.ts`: which creates the default electron window
- `preferences.ts`: which works as a local storage helper.
- `src/index.tsx`: which is the default react renderer setup.

Everything else happens inside `src` folder. you can restructure the folders as per your need. I'm just used to this one :)

### routes

I usually put my routes inside `src/config/routes.ts`. to define new routing schema, just edit the `iRoute` type inside `src/config/routes` and then `routes` in the same file. This can make it easy to `import { routes } from 'path/to/config'` and use your routes with `react-router`. (see `src/components/app/app.tsx`)

### Save and retrieve user preferences

Thats what `preferences.ts` does. It defines a structure for the user preferences and has the simple functions to `get` and `set` these settings. In order to change the structure, just edit the `type Settings` inside `preferences.ts` and then, `import { preferences } from "relative/path/to/main.ts"`.

## Copyright

The template is made available through the [Creative Commons Licence](https://creativecommons.org/publicdomain/zero/1.0/).