// Karma configuration
// Generated on Mon Nov 16 2015 15:21:05 GMT+0200 (FLE Standard Time)
var path = require('../config').path;

module.exports = function(config) {
  var configObj = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../' + path.buildDir + '/vendor.js',
      '../' + path.frontDir + '/vendor/angular-mocks/angular-mocks.js',
      '../' + path.buildDir + '/templates.js',
      '../' + path.buildDir + '/app.js',
      '../' + path.frontDir + '/app/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['html', 'coverage'],

    htmlReporter: {
      outputDir: path.testDir, // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: path.testSpecSuffixDir, // report summary filename; browser info by default


      // experimental
      preserveDescribeNesting: false, // folded suites stay folded
      foldAll: false, // reports start folded (only with preserveDescribeNesting)
    },

    // web server port
    port: 9876,
    preprocessors: {},


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' }
      ]
    }
  };

  configObj.preprocessors['../' + path.buildDir + '/app.js'] = ['coverage'];

  config.set(configObj);
};
