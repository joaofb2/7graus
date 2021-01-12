// spec.js
describe('Protractor Demo App', function() {
      var buttonSobreNos = element(by.css('.a-size-medium a-text-italic'));
      
    it('should add one and two', function() {
      browser.get('https://www.amazon.es');
      element(by.id('twotabsearchtextbox')).sendKeys("raton");
      expect(buttonSobreNos.isDisplayed()).toBeTruthy()
    });
  });