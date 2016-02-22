var gulp = require('gulp');
var del = require('del');
var path = require('../config').path;

var sourcePath = [
  path.buildDir,
  path.prodDir,
  path.testDir + '/build'
];

module.exports = cleanTask;

function cleanTask () {
    return del(sourcePath, cb);

    function cb(error) {
      if (error) {
        console.error('Error with cleanTask', error);
      }
    }
}
