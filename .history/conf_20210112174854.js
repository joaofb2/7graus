exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs'],
    onPrepare: () => {
      browser.ignoreSynchronization = true
      browser.driver.manage().window().maximize()
  }
  }