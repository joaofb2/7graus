// spec.js
describe('Protractor Demo App', function() {
  
    it('should add one and two', function() {
      browser.get('https://www.amazon.es');
      element(by.id('twotabsearchtextbox')).sendKeys("raton");
      var buttonSobreNos = element(by.css(".a-color-state a-text-bold"));
      expect(buttonSobreNos.isDisplayed()).toBeTruthy()
      browser.wait( () => {
        return buttonSobreNos.isDisplayed()
      })
    });
  });