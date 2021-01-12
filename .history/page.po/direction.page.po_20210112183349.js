class DirectionPagePO {
    constructor () {
        this.input_email = element(by.id('ap_email'))
        this.btn_continue = element(by.id('continue'));
        this.input_passw = element(by.id('ap_password'))
        this.btn_submit = element(by.id('signInSubmit'));
    }
  }
  
  module.exports = DirectionPagePO