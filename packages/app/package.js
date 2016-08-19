Package.describe({
  name: 'app',
  summary: 'Tibet in Exile app',
  version: '0.0.1',
  git: 'https://github.com/dbx834/tibet-in-exile.git',
  documentation: 'README.md',
});

Package.onUse(function (api) {
  
  // Use versions of core packages from Meteor 1.4
  api.versionsFrom('1.4');

  /* ----------------------------------- Package Dependencies ---------------------------------- */
  // Packages to use
  const packages = [

    // Third party libraries and Sandbox
    'core@0.0.1',

    // Local libraries
    'lib-interfaces@0.0.1',
  ];

  // Use the packages
  api.use(packages);

  // Give users of this package access to helper functions of every package
  api.imply(packages);

  /* ----------------------------------- Source file exports ----------------------------------- */
  api.addFiles([
    'lib/client/startup.html',
    'lib/client/startup.js',
  ], 'client');
  
  api.addFiles([
    'lib/server/startup.js',
  ], 'server');
});
