// spec.js
describe('Protractor Demo App', function() {
  
    it('should add one and two', function() {
      browser.get('https://www.amazon.es');
      element(by.id('twotabsearchtextbox')).sendKeys("raton");
      
     //expect(browser.getTitle()).toEqual('Amazon.es : raton');
      expect(element(by.css('.a-size-medium a-text-italic').getText().toEqual('ratón')));
    });
  });