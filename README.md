
# Webpack 5, Reactjs 18 starter project

Webpack 5 boilerplate for Reactjs project using babel, sass, typescript, dev server and an optimized production prod.Configured. It also include some boilerplate to start the project including atomic design structior for components

## Here are some of the features included:

- [Babel] (https://babeljs.io/docs/babel-preset-react)
- Css/ Scss (I only consider Scss now for larger projects as css can do a lot now a days)
- Css Modules
- [Typescript] (https://www.typescriptlang.org/)
- [React Router 6.4] (https://reactrouter.com/en/main)

## Dependencies

### webpack 
- webpack - Module and asset bundler.
- webpack-cli - Command line interface for webpack
- webpack-dev-server - Development server for webpack
- webpack-merge - Simplify development/production configuration

### Babel
- @babel/core - Transpile ES6+ to backwards compatible JavaScript
- @babel/preset-env - Smart defaults for Babel
- @babel/preset-react - JSX support
- @babel/preset-typescript - TSX support

### Typescript
- "@types/node-sass": Definitions for node-sass

### Loaders
- babel-loader - Transpile files with Babel and webpack
- sass-loader - Load SCSS and compile to CSS
- css-loader - Resolve CSS imports
- style-loader - Inject CSS into the DOM

### Plugins
- html-webpack-plugin - Generate HTML files from template
- mini-css-extract-plugin - Extract CSS into separate files
- css-minimizer-webpack-plugin - Optimize and minimize CSS assets
- html-minimizer-webpack-plugin  - Optimize and minimize Html assets
- terser-webpack-plugin - Optimize and minimize JavaScript

## Boilerplates:

- Router setup: (a basic createBrowserRouter set up as boilerplate that can be extended to load APIs)
- atomic design (folder structure) [ReadMe](https://atomicdesign.bradfrost.com/chapter-2/)
- css global to consigure a basic css base, variables and utility classes 

## Demo

For testing purpose this project is availiable on netflu [url here](https://as-react-webpack-boilerplate.netlify.app/)

## Start the project or playgroud

To deploy this project run

1. Clone the repo
2. Select the branch you want
3. Run npm i to install dependencies
4. Run one of the following commands, depending on intent:

```bash
  npm run start
```

### Commands:
1. Start the project on dev mode

```bash
  npm run start
```
2. Build for production

```bash
  npm run build
```
3. Build for development

```bash
  npm run dev
```

4. check bundle sizes after building the project (dev or build)

```bash
  npm run bundle-size
```
