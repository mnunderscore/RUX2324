# RUX2324

## Simple Workflow with Laravel Mix.

### Install

- `npm i`

### Features

- Copy `src/*.html` to `dist` folder.
- Copy `src/assets/*/` to `dist/assets/*/` folder.
- Compile SASS `src/styles/app.scss` to `dist/styles` folder.
- Bundle and transpile JS `src/scripts/app.js` to `dist/scripts` folder.
- Create sources maps.
- Run a dev web server with browsersync.

### Commands

- `npx mix watch` : build on files changes, launch a dev server with browsersync.
- `npm run build` : clean, lint and build the project.
- `npm run clean` : clean the `dist` folder.