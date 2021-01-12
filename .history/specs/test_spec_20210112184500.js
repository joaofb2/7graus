const InitialPagePO = require('../page.po/initial.page.po.js')
const LoginPagePO = require('../page.po/login.page.po.js')
const DirectionPagePO = require('../page.po/direction.page.po.js')
const SendPagePO = require('../page.po/send.page.po.js')

const sendPagePO = new SendPagePO()
const directionPagePO = new DirectionPagePO()
const initialPagePO = new InitialPagePO()
const loginPagePO = new LoginPagePO()
describe('Amazon Test', function () {

  it('O utilizador vai á página da Amazon, depois pesquisa por raton e é confirmado que a pesquisa foi feita', function () {
    browser.get('https://www.amazon.es');
    initialPagePO.input_search.sendKeys("raton");browser.sleep(3000)
    initialPagePO.btn_search.click();
    expect(initialPagePO.label_amazonsChoice);
  });

  it('O utilizador clica no primeiro botao pelo text dele', function () {
    browser.sleep(1000)
    initialPagePO.label_linktoBtn.click();
    //element(by.linkText('AmazonBasics - Ratón óptico con USB y 3 botones para Windows y Mac OS X')).click();
  });

  it('O utilizador clica para adicionar ao carrinho e depois clica para a página de Pagamento', function () {
    browser.sleep(1000)
    initialPagePO.btn_addtoCart.click();
    browser.sleep(3000)
    initialPagePO.btn_gotoCheckout.click();
    browser.sleep(2000)
  });

  it('O utilizador é direccionado para a página de Login. Onde põe email e password', function () {
    loginPagePO.input_email.sendKeys("joaofilipe_Barros@hotmail.com");
    loginPagePO.btn_continue.click();
    browser.sleep(3000)
    loginPagePO.input_passw.sendKeys("123456789+");
    loginPagePO.btn_submit.click();
  });

  it('O utilizador chega á 1ª página do Pagamento - Direção ', function () {
    browser.sleep(1000)
    directionPagePO.changeCounty.click();
    browser.sleep(2000)
    directionPagePO.option_choosePT.click();
    browser.sleep(2000)
    directionPagePO.input_fullName.sendKeys("joão");
    directionPagePO.input_adressLine.sendKeys("moarada");
    directionPagePO.input_City.sendKeys("porto");
    directionPagePO.input_postalCode.sendKeys("4450-045");
    directionPagePO.input_phoneNumber.sendKeys("91111111");
    directionPagePO.btn_submit.click();
  });
  it('O utilizador Segue para a Página de Envio', async function () {
    browser.sleep(3000)
    sendPagePO.btn_submit.click();


  });
});