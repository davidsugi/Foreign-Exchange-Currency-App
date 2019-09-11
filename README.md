# Foreign Exchange Currency Application using React-Redux

React-redux app to view current currency rates.
demo: [Foreign Exchange Currency App  at Netlify](https://forex-currency.netlify.com)

## Folder Structure
  - _integrationTests: test file for redux action.
  - Action: Redux action file & action types.
  - Component: Stateless function component files with each test file
  - Containers: Stateful redux connected component
  - Reducers: Redux reducers file
  - Utils: app's helper functions
  - configure-store.js: Redux store configurations
  - LocalStorage.js: Redux store - LocalStorage save and load method
  - setupTests.js: configure test for Jest-Enzyme

## Installation
Install the dependencies and start the server.
```sh
$ cd Foreign-Exchange-Currency-App
$ npm install
$ npm start
```
### Docker
You can install and deploy Foreign Exchange Currency App in a Docker container.
By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd Foreign-Exchange-Currency-App
docker build -t Foreign-Exchange-Currency-App 
```
This will create the Foreign-Exchange-Currency-App image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Foreign-Exchange-Currency-App.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 3001 of the host to port 3000 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm Foreign-Exchange-Currency-App
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
