class LoginPagePO {
    constructor () {
        this.btn_addtoCart = element(by.id('add-to-cart-button')).click();
        this.btn_gotoCheckout = element(by.id('attach-sidesheet-checkout-button')).click();
    }
  
  }
  
  module.exports = LoginPagePO