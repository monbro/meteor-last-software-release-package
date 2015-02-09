Session.setDefault('deployDate', '')

DeployDate = {
  refresh: function() {
    Meteor.call('lastDeployed', function(err, data) {
        Session.set('deployDate', data);
    });
  }
};

UI.registerHelper('lastDeployed', function(template) {
    return Session.get('deployDate');
});


Meteor.startup(function () {
    DeployDate.refresh();
});