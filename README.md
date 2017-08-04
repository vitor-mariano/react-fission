<p align="center"><img src="http://svgshare.com/i/2UT.svg"></p>

# About React Fission
React Fission is a powerful starting project for ReactJS, based on [Ignite](https://github.com/infinitered/ignite).

### Powerful Features

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

You should install the command `create-project` first

 NPM | Yarn
-----|------
`npm install -g create-project` | `yarn global add create-project`

and start a new React Fission project.

``` sh
create-project your-project-name matheusmariano/react-fission
```

If you are looking for the development version, you should run

``` sh
create-project your-project-name matheusmariano/react-fission#develop
```

Open your new project folder

``` sh
cd your-project-name
```

and initiate your git repository.

``` sh
git init
```

> It's very important to initiate your git repository at this moment, before install node dependencies.
Otherwise Husky will not work.

Install all node dependencies.

NPM | Yarn
----|-----
`npm install` | `yarn install`

Paste your environment file from example.

``` sh
cp example.env .env
```

Finally start the development server.

NPM | Yarn
----|-----
`npm run dev` | `yarn run dev`

The application will be available at `localhost:8000`.

## Building the app

Run the command

NPM | Yarn
----|-----
`npm run build` | `yarn run build`

The files should be compiled inside `public` folder. This is your app folder and you should use that
to publish your app in production.

## Available commands

NPM | Yarn
----|-----
`npm run command` | `yarn run command`

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
