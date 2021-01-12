// spec.js
describe('Protractor Demo App', function() {
  
    it('should add one and two', function() {
      browser.get('https://www.amazon.es');
      element(by.id('twotabsearchtextbox')).sendKeys("raton");
      var buttonSobreNos = element(by.css('.a-size-medium a-text-italic'));
      expect(buttonSobreNos.isDisplayed()).toBeTruthy()
    });
  });