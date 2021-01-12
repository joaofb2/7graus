const InitialPagePO = require('../page.po/initial.page.po.js')

const initialPagePO = new InitialPagePO()
describe('Amazon Test', function () {

  it('O utilizador vai á página da Amazon, depois pesquisa por raton e é confirmado que a pesquisa foi feita', function () {
    browser.get('https://www.amazon.es');
    initialPagePO.input_search.sendKeys("raton");browser.sleep(3000)
    initialPagePO.btn_search.click();
    //expect(initialPagePO.label_bottonToBuy);
  });

  it('O utilizador clica no primeiro botao pelo text dele', function () {
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
    element(by.id('continue')).click();
    browser.sleep(3000)
    element(by.id('ap_password')).sendKeys("123456789+");
    element(by.id('signInSubmit')).click();
  });

  it('O utilizador chega á 1ª página do Pagamento - Direção ', function () {
    browser.sleep(1000)
    element(by.id('address-ui-widgets-countryCode')).click();
    browser.sleep(2000)
    element(by.css('a[data-value="PT"]')).click();
    browser.sleep(2000)
    element(by.id('address-ui-widgets-enterAddressFullName')).sendKeys("joão");
    element(by.id('address-ui-widgets-enterAddressLine1')).sendKeys("moarada");
    element(by.id('address-ui-widgets-enterAddressCity')).sendKeys("porto");
    element(by.id('address-ui-widgets-enterAddressPostalCode')).sendKeys("4450-045");
    element(by.id('address-ui-widgets-enterAddressPhoneNumber')).sendKeys("91111111");
    element(by.id('address-ui-widgets-form-submit-button')).click();
  });

  it('O utilizador Segue para a Página de Envio', async function () {
    browser.sleep(3000)
    element(by.css('input[type="submit"]')).click();


  });
});