

# Impakt

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@impakt/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

## Generating Backend API
Install `npm install ng-openapi-gen --save-dev`
From root directory run `NODE_TLS_REJECT_UNAUTHORIZED=0 ./node_modules/.bin/ng-openapi-gen -c apps/frontend/backend-api-gen-schema.json`

## Environment variables and .env file
Environment variables are set using .env file. This file is not part of the repo and must be created beforehand.

All values that are used in the code are listed here in an example .env config:

```
LDAP_URL="ldap://localhost:10389"
LDAP_BASE="ou=users"
LDAP_DN="cn={username},ou=users"
LDAP_FILTER="(cn={username})"
LDAP_ATTRIBUTES=['cn']
DB_TYPE="mysql"
DB_HOST="localhost"
DB_PORT=3306
DB_USERNAME="root"
DB_PASSWORD="12345"
DB_NAME="impakt"
JWT_SECRET="asdfopwe5fdser56sfdg-sdfger5sdfg+ws"
```

For local development .env file should be placed in ```apps/backend/.env```.
For production .env file should be placed in the same dir as main.js.

## Production deployment

### Frontend

If frontend is deployed under subfolder use this command rather than nx command.
```
ng build --prod --base-href /app/ --deploy-url /app/
```
Copy the content of /dist folder (for FE) to desired web folder.



### Backend
Copy the content of /dist folder (for BE) to desired location. In case of installing node_modules on server, attach also package.json.
Copy node_modules that are relevant for BE or run ```npm install --omit=dev``` on server.
It is important to add ```--omit=dev```. This ensures that devDependencies will not be installed on the server which will save a lot of space.
Copy env variables to .profile (to be permanent and not to dismiss after session logout).

```.env``` file with production values shold be copied into the folder with ```main.js``` file.

#### NPM and disk quota
If you installed ```node_modules``` by ```npm install``` then npm will cache a lot of data into ```hrivnaj/.npm/_cacache```.
In such a case it is good/necessary to ```rm -rf``` _cacache folder to clear the cache. Otherwise you can get into problems with unsufficient disk space.


#### Running backend as a service
For daemonizing application ```pm2``` is used. It should be distributed in ```node_modules```.
Otherwise run ```npm install pm2```.

To run app run ```./node_modules/pm2/bin/pm2 start main.js --name impakt```
To list all services ```./node_modules/pm2/bin/pm2 list all```
To stop service ```./node_modules/pm2/bin/pm2 stop impakt```
To remove service ```./node_modules/pm2/bin/pm2 remove impakt```

To see more, check: https://pm2.keymetrics.io/docs/usage/quick-start/
