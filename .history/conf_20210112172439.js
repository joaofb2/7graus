exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/specs.js'],
    onPrepare: () => {
      browser.ignoreSynchronization = true
      browser.driver.manage().window().maximize()
  }
  }