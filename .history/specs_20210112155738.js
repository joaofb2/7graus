// spec.js
describe('Amazon Test', function () {
  //var buttonSobreNos = element(by.id('B01618WO9O-amazons-choice-label'));

  it('O utilizador vai á página da Amazon, depois pesquisa por raton e é confirmado que a pesquisa foi feita', function () {
    browser.get('https://www.amazon.es');
    element(by.id('twotabsearchtextbox')).sendKeys("raton");
    element(by.id('nav-search-submit-button')).click();
    expect(by.id('B01618WO9O-amazons-choice-label'));
  });

  it('O utilizador clica no primeiro botao pelo text dele', function () {
    //element.all(by.css('.a-size-base-plus a-color-base a-text-normal')).get(1).click();
    browser.sleep(1000)
    element(by.linkText('AmazonBasics - Ratón óptico con USB y 3 botones para Windows y Mac OS X')).click();
  });

  it('clicar para adicionar ao carrinho e depois clique para a página de Pagamento', function () {
    browser.sleep(1000)
    element(by.id('add-to-cart-button')).click();
    browser.sleep(3000)
    element(by.id('attach-sidesheet-checkout-button')).click();
    browser.sleep(2000)
  });

  it('O utilizador é direccionado para a página de Login. Onde põe email e password', function () {
    element(by.id('ap_email')).sendKeys("joaofilipe_Barros@hotmail.com");
    //element.all(by.linkText('continue')).get(0).click();;
    element(by.id('continue')).click();
    browser.sleep(3000)
    element(by.id('ap_password')).sendKeys("123456789+");
    element(by.id('signInSubmit')).click();
  });

  it('O utilizador chega á 1ª página do Pagamento - Direção ', function () {
    browser.sleep(1000)
   
    element(by.id('address-ui-widgets-enterAddressLine1')).sendKeys("cidade");
  });
});