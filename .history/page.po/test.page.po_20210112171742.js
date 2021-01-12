class InitialPagePO {
  constructor () {
      this.logo = element(by.css('.logo'))
      this.inputEmail = element(by.css('input.has-text-centered[placeholder="Email"]'))
      this.inputPass = element(by.css('input.has-text-centered[placeholder="Password"]'))
      this.linkResetPass =  element.all(by.css('.links')).get(0);
      this.linkRegister = element.all(by.css('.links')).get(1);
      this.facebookLoginButton = element(by.css('.customGPlusSignIn'))
      this.facebookLoginIcon = element(by.css('.icon'))
      this.loginButton = element(by.css('button.is-primary'))
  }

}

module.exports = InitialPagePO