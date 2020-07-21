
let homePage = require('../Pages/MainPage');
describe('demo calculator test', function(){
    it('addition Test', function(){

        homePage.getUrl("http://juliemr.github.io/protractor-demo/");
        homePage.enterFirstNumber(5);
        homePage.enterSecondNumber(5);
        homePage.clickgoButton();
        homePage.verifyResult(10);
        browser.sleep(2000);

    });



});