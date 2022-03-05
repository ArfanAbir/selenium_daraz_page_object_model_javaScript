const {Builder, By} = require('selenium-webdriver');

async function daraz(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.daraz.com.bd/');
    await driver.findElement(By.id('anonLogin')).click();
    
   // await driver.quit();
}


daraz();