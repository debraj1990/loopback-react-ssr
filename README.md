# Loopback Backend with React

This project uses loopback - A nodejs framework for building API and React JS- A minimalistic JavaScript framework.

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
git clone github.com/thedma04/skillnav-test
```

Once cloned change directory into the folder and open your terminal and run

```
yarn 
or 
npm install
```

Once all the packages are installed, you will see something like this if you are using yarn

```
    yarn install v1.7.0
    [1/5] Validating package.json...
    [2/5] Resolving packages...
    success Already up-to-date.
    Done in 0.85s.

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


## Starting the APP

To start the application, one must first install all packages
Then open the directory containing the application in the terminal
There they can simply type:

```
 yarn start
```

Check the terminal to see whether the application has started well

```
    Web server listening at: http://localhost:3000
    Browse your REST API at http://localhost:3000/explorer
    webpack built 3646c16014cac55a0083 in 3486ms

```

Once you see this in your terminal, go to your browser and type ```http://localhost:3000```
The application should be running perfectly


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Loopback](http://reactjs.o/) - The web framework used
* [React](https://loopback.io/) - Dependency Management
* [React Router Dom](https://react-router.com/) - Used to generate RSS Feeds



## Authors

* **Terrence Owusu** 



## Challenges

* Wrting automated test for the API endpoint was 
* Configuring jest to work well with webpack was challenging but I hacked it
* etc
