## Deploy the project locally in dev environment

In order to deploy successfully this project, it requires to to follow this steps:

1. Navigate to the directory of this file.
2. Execute the following commands:

```bash
# install dependencies
npm install

# deploy
npm start
```

3. Access to http://localhost:3000 through a web browser to reach the application.

## Deploy the project locally in Production environment

To simulate a deployment on a production environment, it requires to follow this steps:

1. Navigate to the directory of this file.
2. Execute the following commands:

```bash
# build for production with minification
npm run build

# test the production build locally
serve -s build
```

3. Access to http://localhost:5000 through a web browser to reach the application.

## Execute the tests

To execute the tests that are already created, it requires to follow this steps:

1. Navigate to the directory of this file.
2. Execute the following commands:

```bash
# install dependencies
npm install

# run tests with jest
npm test
```
