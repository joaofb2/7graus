class LoginPagePO {
    constructor () {
        this.input_email = element(by.id('ap_email')).sendKeys("joaofilipe_Barros@hotmail.com");
        this.btn_continue = element(by.id('continue'));
        this.input_passw = element(by.id('ap_password')).sendKeys("123456789+");
        this.btn_submit = element(by.id('signInSubmit'));
    }
  }
  
  module.exports = LoginPagePO