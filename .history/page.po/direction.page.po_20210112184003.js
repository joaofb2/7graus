class DirectionPagePO {
    constructor () {
        this.changeCounty =  element(by.id('address-ui-widgets-countryCode'))
        this.option_choosePT = element(by.css('a[data-value="PT"]'))
        this.input_fullName = element(by.id('address-ui-widgets-enterAddressFullName'))
        this.input_adressLine = element(by.id('address-ui-widgets-enterAddressLine1'))
        this.input_City = element(by.id('address-ui-widgets-enterAddressCity'))
        this.input_postalCode = element(by.id('address-ui-widgets-enterAddressPostalCode'))
        this.input_phoneNumber = element(by.id('address-ui-widgets-enterAddressPhoneNumber'))
        this.btn_submit = element(by.id('address-ui-widgets-form-submit-button'))
    }
  }
  
  module.exports = DirectionPagePO