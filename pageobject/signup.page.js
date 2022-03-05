const { Builder, By, Key, Until} = require('selenium-webdriver');
const BasePage = require('../pageobject/basepage');
const driver = require('selenium-webdriver');

class SignUp extends BasePage {
    clickSignUpIn(){
        driver.findElement(By.id('anonLogin'));
    }
}

module.exports = SignUp;