Package.describe({
  name: 'kostanos:autoform-daysofweek',
  summary: 'Days of week multiple selector',
  version: '1.0.1',
  git: 'https://github.com/Kostanos/meteor-autoform-daysofweek.git'
});

Package.onUse(function(api) {
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');

  // Ensure momentjs packages load before this one if used
  api.use('momentjs:moment@2.8.4', 'client', {weak: true});
  // api.use('mrt:moment-timezone@0.2.1', 'client', {weak: true});

  api.addFiles([
    'autoform-daysofweek.html',
    'autoform-daysofweek.js'
  ], 'client');
});
