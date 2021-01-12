class LoginPagePO {
    constructor () {
        this.btn_addtoCart = element(by.id('ap_email')).sendKeys("joaofilipe_Barros@hotmail.com");
        this.btn_gotoCheckout = element(by.id('continue'))
        this.btn_addtoCart = element(by.id('ap_password')).sendKeys("123456789+");
        this.btn_gotoCheckout = element(by.id('attach-sidesheet-checkout-button')).click();
        element(by.id('ap_email')).sendKeys("joaofilipe_Barros@hotmail.com");
    element(by.id('continue')).click();
    browser.sleep(3000)
    element(by.id('ap_password')).sendKeys("123456789+");
    element(by.id('signInSubmit')).click();
    }
  
  }
  
  module.exports = LoginPagePO