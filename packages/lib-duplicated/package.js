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
    // Foundry Files
    'lib/assets/font-awesome.min.css',
    'lib/assets/themify-icons.css',
    'lib/assets/bootstrap.min.css',
    'lib/assets/flexslider.css',
    'lib/assets/theme-nearblack.css',
    'lib/assets/elegant-icons.min.css',
    'lib/assets/font-roboto.css',
    'lib/assets/custom.css',
    // JS
    'lib/assets/bootstrap.min.js',
    'lib/assets/flexslider.min.js',
    'lib/assets/parallax.js',
  ], 'client');

  // Client Main Module
  api.mainModule('lib/client.js', 'client');
});
