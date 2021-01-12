let SpecReporter = require('jasmine-spec-reporter').SpecReporter
exports.config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/home_spec.js'],
    onPrepare: () => {
      browser.ignoreSynchronization = true
      browser.driver.manage().window().maximize()

      jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
              displayStacktrace: true
          }
      }))
  },