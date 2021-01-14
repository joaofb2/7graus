
describe('Amazon Test',  () => {
  var EC = protractor.ExpectedConditions;
  var price_inside_buybox ;
  it('O utilizador vai á página da Amazon',  () => {
    browser.get('https://www.amazon.es');
  });

  it('O utilizador pesquisa por um rato e é confirmado que a pesquisa foi feita ao encontrar o nome do rato procurado',  () => {
    element(by.id('twotabsearchtextbox')).sendKeys("AmazonBasics - Ratón óptico con USB y 3 botones para Windows y Mac OS X");
    element(by.id('nav-search-submit-button')).click();
    element(by.id('twotabsearchtextbox')).clear();
    expect(element(by.linkText('AmazonBasics - Ratón óptico con USB y 3 botones para Windows y Mac OS X')).isPresent());
  });

  it('É verificado se aparece o botão escrito na pesquisa', () => {
    expect(element(by.linkText('AmazonBasics - Ratón óptico con USB y 3 botones para Windows y Mac OS X')).isPresent());
  });

  it('O utilizador clica no rato a comprar', () => {
    element(by.linkText('AmazonBasics - Ratón óptico con USB y 3 botones para Windows y Mac OS X')).click();
    browser.sleep(2000)
  });

  it('É verificado se o valor do rato é 10€ - failed', () => {
    price_inside_buybox = element(by.id('price_inside_buybox'));
    browser.wait(EC.textToBePresentInElement(price_inside_buybox, '9,50 €'), 5000);
    expect(price_inside_buybox.getText()).not.toEqual('10 €');
  });

  it('É verificado se o valor do rato é 9,50€ - pass', () => {
    price_inside_buybox = element(by.id('price_inside_buybox'));
    expect(price_inside_buybox.getText()).toEqual('9,50 €');
  });

  it('É verificado se o valor do rato (para 30 quantidades) é 64,80 € - pass', () => {    
    element(by.id('size_name_2')).click();
    price_inside_buybox = element(by.id('price_inside_buybox'));
    browser.wait(EC.textToBePresentInElement(price_inside_buybox, '64,80 €'), 5000);
    expect(price_inside_buybox.getText()).toEqual('64,80 €');
  });

  it('Ao clicar em (1 quantidade) confirmar outra vez que o valor é 9,50 € - pass', () => {
    element(by.id('size_name_0')).click();
    price_inside_buybox = element(by.id('price_inside_buybox'));
    browser.wait(EC.textToBePresentInElement(price_inside_buybox, '9,50 €'), 5000);
    expect(price_inside_buybox.getText()).toEqual('9,50 €');
  });

  it('clicar para adicionar ao carrinho e depois clique para a página de Pagamento',  () => {
    browser.sleep(2000)
    element(by.id('add-to-cart-button')).click();
    browser.sleep(3000)
    element(by.id('attach-sidesheet-checkout-button')).click();
    browser.sleep(2000)
  });

  it('O utilizador é direccionado para a página de Login. Onde põe email correto e password errada. E confirma que mostra o erro',  () => {
    element(by.id('ap_email')).sendKeys("joaofilipe_Barros@hotmail.com");
    element(by.id('continue')).click();
    browser.sleep(3000)
    element(by.id('ap_password')).sendKeys("++++++");
    element(by.id('signInSubmit')).click();
    expect(element(by.id('auth-error-message-box')).getText()).toContain('La contraseña no es correcta');
  });

  it('O utilizador é direccionado para a página de Login. Onde põe a password correta e segue para a proxima pagina',  () => {
    element(by.id('ap_password')).clear().sendKeys("123456789+");
    element(by.id('signInSubmit')).click();
  });

  it('Na página da Direção. Preenche-se o codigo postal PT e dá erro por estar selecionado Espanha ',  () => {
    browser.wait(EC.presenceOf($('#addres-new')), 5000);

    element(by.id('address-ui-widgets-enterAddressFullName')).sendKeys("joão");
    element(by.id('address-ui-widgets-enterAddressLine1')).sendKeys("moarada");
    element(by.id('address-ui-widgets-enterAddressCity')).sendKeys("222");
    element(by.id('address-ui-widgets-enterAddressPostalCode')).sendKeys("4450-045");
    element(by.id('address-ui-widgets-enterAddressPhoneNumber')).sendKeys("91111111");
    element(by.id('address-ui-widgets-form-submit-button')).click();
    browser.sleep(1000)
    expect(element(by.linkText('Especifica un código postal')).isPresent());
    expect(element(by.linkText('Introduce una ciudad válida.')).isPresent());
  });

  it('É escolhido então Portugal como país para enviar ',  () => {
    element(by.id('address-ui-widgets-countryCode')).click();
    browser.sleep(1000)
    element(by.css('a[data-value="PT"]')).click();
    browser.wait(EC.presenceOf($('#address-ui-checkout-form')), 5000);
    
    element(by.id('address-ui-widgets-enterAddressFullName')).sendKeys("joão");
    element(by.id('address-ui-widgets-enterAddressLine1')).sendKeys("moarada");
    element(by.id('address-ui-widgets-enterAddressCity')).sendKeys("porto");
    element(by.id('address-ui-widgets-enterAddressPostalCode')).sendKeys("4450-045");
    element(by.id('address-ui-widgets-enterAddressPhoneNumber')).sendKeys("91111111");
    element(by.id('address-ui-widgets-form-submit-button')).click();
  });

  it('O utilizador Segue para a Página de Envio',  () => {
    browser.sleep(3000)
    element(by.css('input[type="submit"]')).click();


  });
});