// spec.js
describe('Protractor Demo App', function() {
    it('should add one and two', function() {
      browser.get('https://www.amazon.es');
      element(by.id('twotabsearchtextbox')).sendKeys("raton");
      expect(element(by.linkText('Ngs PCS71601FLAME - Ratón óptico, color negro')).isDisplayed()).toBeTruthy()
    });
  });