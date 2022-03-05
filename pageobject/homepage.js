const { Builder, By, Key, Until} = require('selenium-webdriver');
var BasePage = require('../pageobject/basepage');
var driver = require('selenium-webdriver');

class HomePage extends BasePage {
    enter_search(searchText){
        driver.findElement(By.css('input[name=q]')).sendKeys(searchText);
        driver.findElement(By.css('input[name=q]')).sendKeys(Key.ENTER);
    }
}

module.exports = HomePage;