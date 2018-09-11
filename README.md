# Loopback Backend with React

This project uses loopback - A nodejs framework for building API and React JS- A minimalistic JavaScript framework. This is using loopback and ReactJS to do server side rendering.

This application demonstrates the use of webpack in loopback and ReactJS to do server side rendering
The application has four routes, the first one being users routes which is immediately loaded from the server 
and added to the Redux state via Window Object.

The admin routes only loads when user is authenticated and notFound component is shown when none of the routes matches

StaticRouter from React-Router was used for routing ReactJS on the server whilst ReactDOM.hydrate was used for rendering the html sent by the server.

The data is load from ```http://react-ssr-api.herokuapp.com``` An API built with expressjs


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To be able to run this application successully on your machine, you need to install nodejs on your machine. Preferably, your nodejs should be above version 4.
The Operating System used to build this application was Ubuntu v16.04, however its supports most OS
The node package manager used is yarn
To install yarn with npm run:

```
 npm i -g yarn
```

### Installing

This step by step series of examples will help you run the application on development


Clone the applicaton

```
git clone github.com/thedma04/loopback-react-ssr
```

Once cloned change directory into the folder and open your terminal and run

```
yarn 
or 
npm install
```



## Running the tests

This project used jest to run unit testing

### Break down into end to end tests

This tests components by creating snapShots and also matching some elements in the component
When runned the command below any file with .test.js will be run
Components and routes were tested as well

```
 yarn test
 or
 npm run test
```

Showing coverage of test ```yarn test:coverage```


## Starting the APP

To start the application, one must first install all packages
Then open the directory containing the application in the terminal
There they can simply type:

```
 yarn dev
```

Check the terminal to see whether the bundling of the server and client side

```
    Web server listening at: http://localhost:3000

```

Once you see this in your terminal, go to your browser and type ```http://localhost:3000```
The application should be running perfectly


## Built With

The following technology were the major one's used

* [Loopback](https://loopback.io/) - The server framework used
* [React](https://reactjs.org/) - The web framework used
* [React Router](https://reacttraining.com/react-router/web/guides/philosophy) - For handling client side routing
* [Redux](https://redux.js.org/) - The state management used both client and server
* [Webpack](https://webpack.js.org/) - For bundling both the server and client into single file


## Way Forward

* Using NextJS to do server rendering with loopback will be more efficient
* Loopback v4 promises to be able to use webpack for bundling the server, this will make server side      rendering easier

## NOTE
**Second solution is in the branch secondSolution**
This uses loopback API with react in a monolithic approach to create a simple blogging platform
