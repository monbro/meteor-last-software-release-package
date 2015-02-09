var fs = Meteor.npmRequire('fs');
var path = Meteor.npmRequire('path');

Meteor.methods({
  lastDeployed: function() {
    var path = Npm.require('path');
    var basepath = path.resolve('.');
    var filepath = basepath+'/config.json';
    var stats = fs.statSync(filepath);

    return stats.mtime;
  },
});