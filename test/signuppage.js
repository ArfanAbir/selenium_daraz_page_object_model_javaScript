const SignUpPage = require('../pageobject/signup.page');

describe("This is our Describe Block", async () => {
    this.timeout(50000);
    beforeEach(() => {
        // Action to be performed before Test
    });

    afterEach(() => {
        // Action To Be Perfotrmed after our Test
    });

    it('Our Test Start From Here!',  async () => {
        const baseUrl ="https://www.daraz.com.bd/";
       await SignUpPage.go_to_url(baseUrl);
       await SignUpPage.clickSignUpIn().click();

    });
})