# Foodbank

A web application aiming to educate young children about healthy eating habits and food groups

## Available Scripts

Please have `yarn` installed on your computer to run the project the intended way. Also make sure the line endings for the project are `lf` to reduce any possible bugs.

In the project directory, you can run:

### `yarn dev`

Runs the app's frontend and backend in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn client`

Runs the app's frontend only in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn server`

Runs the app's backend only in development mode.

<!-- ### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. -->

## Package management

Since we're using yarn workspaces, the packages should not be installed in the respective folders. Instead, to add/remove packages to either the `client` or `server`, use

### `yarn workspace <workspace-name> <operation> <package-name> [flag]`

- `workspace-name` - this should be either `client` or `server`, depending on which workspace to install it
- `operation` - this will be with `add` to install a dependency or `remove` to uninstall
- `package-name` - the name of the package-name(s)(space separated) to install (example: `bootstrap`, `react react-dom`, etc.)
- `flag` - optional argument of yarn flags like `-D/--dev` to install as devDependency or `-O/--optional` to install as optional dependency

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
