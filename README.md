<p align="center"><img src="http://svgshare.com/i/2UT.svg"></p>

<p align="center">A powerful starting project for ReactJS, based on <a href="https://github.com/infinitered/ignite">Ignite</a>.</p>

<p align="center">
  <a href="https://travis-ci.org/matheusmariano/react-fission">
    <img src="https://travis-ci.org/matheusmariano/react-fission.svg?branch=develop" alt="Build Status">
  </a>
  <a href="https://gitter.im/react-fission?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
    <img src="https://badges.gitter.im/Join_Chat.svg" alt="Gitter">
  </a>
</p>

---

## Powerful Features

React Fission follows the best practices and use powerful libraries for ReactJS, as listed below.
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb CSS Style Guide](https://github.com/airbnb/css)
- [Husky - Git hooks to prevent bad commits](https://github.com/typicode/husky)
- [Redux - Predictable state container for JavaScript apps](https://github.com/reactjs/redux)
- [Redux Persist - Persist and rehydrate a redux store](https://github.com/rt2zz/redux-persist)
- [Reduxsauce - Provides a few tools for working with Redux](https://github.com/skellock/reduxsauce)
- [React Router - Declarative routing for React](https://github.com/ReactTraining/react-router)
- [Apisauce - Talk with API without pain](https://github.com/skellock/apisauce)
- [Redux Saga - An alternative side effect model for Redux](https://github.com/redux-saga/redux-saga/)
- [React Intl - Internationalize React apps](https://github.com/yahoo/react-intl)
- [React Retina - React component to serve Hi-Res images](https://github.com/KyleAMathews/react-retina-image)
- [Ramda - Practical Functional JavaScript](https://github.com/ramda/ramda/)
- [Webpack - An awesome web app bundler](https://github.com/webpack/webpack)
- [Jest - Painless JavaScript Testing](https://github.com/facebook/jest/)

## Instalation

You must install the CLI

 NPM | Yarn
-----|------
`npm install -g react-fission-cli` | `yarn global add react-fission-cli`

and start a new React Fission project.

``` sh
fission new your-project-name
```

Open your new project folder

``` sh
cd your-project-name
```

and start the development server.

NPM | Yarn
----|-----
`npm run dev` | `yarn dev`

The application should be available at `localhost:8000`.

## Building the app

Run the command

NPM | Yarn
----|-----
`npm run build` | `yarn build`

The files should be compiled inside `public` folder. This is your app folder and you should use that
to publish your app in production.

## Available commands

NPM | Yarn
----|-----
`npm run command` | `yarn command`

Command | Description
--------|------------
`build` | Build the app using webpack.
`dev` | Start the webpack development server.
`fixcode` | Fix basic linter issues.
`lint` | List all linter issues.

## Known issues

#### Issue
`Uncaught Error: Cannot find module [sass file path]`
#### Solution
Run `npm rebuild node-sass` and restart the development server.

## License

React Fission is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
