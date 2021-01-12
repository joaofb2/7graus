// spec.js
describe('Protractor Demo App', function() {
    it('should add one and two', function() {
      browser.get('https://www.amazon.es');
      element(by.id('twotabsearchtextbox')).sendKeys("raton");
      expect(element(by.id('B01618WO9O-amazons-choice')).isDisplayed()).toBeTruthy()
    });
  });