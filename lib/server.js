var path = Npm.require('path');                                                        // 97
var fs = Npm.require('fs');

Meteor.methods({
  lastDeployed: function() {
    var basepath = path.resolve('.');
    var filepath = basepath+'/config.json';
    var stats = fs.statSync(filepath);

    return stats.mtime;
  },
});