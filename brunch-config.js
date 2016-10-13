module.exports = {
  files: {
    javascripts: {
      entryPoints: {
        'app/scripts/initialize.js': 'scripts/bundle.js',
      },
    },
    stylesheets: {joinTo: 'styles/main.css'}
  },

  plugins: {
    babel: {presets: ['es2015']},
    swPrecache: {
      'swFileName': 'sw.js',
      'options': {
        'staticFileGlobs': [
           'public/styles/main.css',
           'public/scripts/bundle.js',
           'public/index.html'
        ],
        'stripPrefix' : 'public/',
        importScripts: [
          'sw/sw-toolbox.js',
          'sw/sw-toolbox-config.js'
        ]
      }

    }
  }
};
