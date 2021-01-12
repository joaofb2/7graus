// spec.js
describe('Protractor Demo App', function() {
  var buttonSobreNos = element(by.css(".a-color-state a-text-bold"));
    it('should add one and two', function() {
      browser.get('https://www.amazon.es');
      element(by.id('twotabsearchtextbox')).sendKeys("raton");
      expect(buttonSobreNos.isDisplayed()).toBeTruthy()
    });
  });