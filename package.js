Package.describe({
  name: 'monbro:last-software-release-date',
  summary: 'This package will provide a easy way to show the last deployment date to meteor.js.',
  version: '1.0.0',
  git: 'https://github.com/monbro/meteor-last-software-release-package/'
});

function configurePackage(api) {

  if(api.versionsFrom) {
    api.versionsFrom('METEOR@1.0');
  }

  // Core Dependencies
  api.use(
    [
      'blaze@2.0.0',
      'templating@1.0.5',
      'ui',
      'meteor'
    ]
  );

  api.use('copleykj:livestamp', 'client');

  api.addFiles('lib/client.js','client');
  api.addFiles('lib/server.js','server');
  api.addFiles('lib/deploy_date.html');

  api.export('DeployDate');
}

Package.onUse(function(api) {
  configurePackage(api);
});

Package.onTest(function(api) {
  configurePackage(api);

  api.use('tinytest');
  // api.addFiles('tests/breadcrumb-tests.js');
});
