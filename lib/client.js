DeployDate = {
  deployDate: function() {
    return Meteor.call('lastDeployed');
  }
};

UI.registerHelper('lastDeployed', function(template) {
  return DeployDate.deployDate();
});