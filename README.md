# timeMap
[<img src="https://travis-ci.org/georgelviv/timeMap.svg?branch=master">](https://travis-ci.org/georgelviv/timeMap)

Magic starts here.

-----

Before you run project, you need to install npm and bower dependencies.
Please ensure, you have already installed bower and gulp globally.
Also to be able to run tests, please install localy phantomjs
http://phantomjs.org/
```
$ npm install
$ bower install
```

Gulp commands
```
$ gulp prod      // To build production files
$ gulp build     // To build develop file
$ gulp develop   // To develop (build develop, run watchers and tests with karma)
$ gulp clean     // To delete build and production folders
$ gulp test      // To run test runner
```

To boot backend part of app
```
$ node boot     // To boot app
```
Available parameters with boot:
```
$ node boot --port 2867    // Run server on 2867 port
```
