Package.describe({
  name: 'lib-duplicated',
  summary: 'UI/UX Library',
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
    'base@0.0.1',
  ];

  // Use the packages
  api.use(packages);

  // Give users of this package access to helper functions of every package
  api.imply(packages);

  /* ----------------------------------- Source file exports ----------------------------------- */

  // Export assets
  api.addFiles([
    // Bootstrap v 4.alpha
    'lib/assets/bootstrap/grid.css',
    'lib/assets/bootstrap/reboot.css',
    'lib/assets/bootstrap/utilities.css',
    // Theme
    'lib/assets/theme.css',
    'lib/assets/elegant-icons.min.css',
  ], 'client');

  // Client Main Module
  api.mainModule('lib/client.js', 'client');
});
