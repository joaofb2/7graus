class InitialPagePO {
  constructor () {
      this.input_search = element(by.id('twotabsearchtextbox'));
      this.btn_search = element(by.id('nav-search-submit-button'));
      this.label_amazonsChoice = element(by.id('B01618WO9O-amazons-choice-label'));
      this.label_linktoBtn = element(by.linkText('AmazonBasics - Ratón óptico con USB y 3 botones para Windows y Mac OS X'))
      //this.pesquisa = element(by.id('twotabsearchtextbox'))
      this.btn_addtoCart = element(by.id('add-to-cart-button')).click();
      browser.sleep(3000)
      this.btn_gotoCheckout = element(by.id('attach-sidesheet-checkout-button')).click();
  }

}

module.exports = InitialPagePO