// spec.js
describe('Protractor Demo App', function() {
    //var buttonSobreNos = element(by.id('B01618WO9O-amazons-choice-label'));

    it('should add one and two', function() {
      browser.get('https://www.amazon.es');
      element(by.id('twotabsearchtextbox')).sendKeys("raton");
      // confirmar q cegou ao link da pesquisa
      expect(by.id('B01618WO9O-amazons-choice-label'));
      //clicar num botao
      //element(by.id('gobutton')).click();
     
      element(by.id('nav-search-submit-button')).click();
      
      //element.all(by.css('.a-size-base-plus a-color-base a-text-normal')).get(1).click();
      browser.sleep(2000)
      element(by.linkText('AmazonBasics - Ratón óptico con USB y 3 botones para Windows y Mac OS X')).click();
    });
    element(by.id('add-to-cart-button')).click();
    element(by.id(' attach-sidesheet-checkout-button')).click();
   
  });