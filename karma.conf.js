module.exports = function(config) {
  config.set({
  	autoWatch: true,
    basePath: './',
    frameworks: ['jasmine'],

    files: [
      '*.js',
      'test/*.spec.js'
    ],

    singleRun: false,

    plugins: [
    	'karma-jasmine'
    ]
  })
}
