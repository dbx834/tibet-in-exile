Package.describe({
  name: 'base',
  summary: 'Base',
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
    'meteor-base',
    'mobile-experience',
    'mongo',
    'reactive-var',
    'jquery',
    'tracker',
    'standard-minifier-css',
    'standard-minifier-js',
    'ecmascript',
    'es5-shim',
    'check',
    'http',
    'check',
    'audit-argument-checks',
    'static-html',
    'react-meteor-data@0.2.9',
  ];

  // Use the packages
  api.use(packages);

  // Give users of this package access to helper functions of every package
  api.imply(packages);
});
