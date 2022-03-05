const homepage = require('../pageobject/homepage.js');

describe("This is our Describe Block", function () {
    this.timeout(50000);
    beforeEach(function () {
        // Action to be performed before Test
    });

    afterEach(function () {
        // Action To Be Perfotrmed after our Test
    });

    it('Our Test Start From Here!',async function () {
        var baseUrl ="https://www.google.com/";
      await homepage.go_to_url();
      await homepage.enter_search("The Best Time for Get Marry!");


    });
})