exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../calc.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }