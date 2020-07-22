//impporting models
let homePage = require('../Pages/MainPage');

let assert = require('assert')
describe('demo calculator test', function(){
    it('addition Test', function(){

        homePage.getUrl("http://juliemr.github.io/protractor-demo/");
        homePage.enterFirstNumber(5);
        homePage.enterSecondNumber(5);
        homePage.clickgoButton();
        homePage.verifyResult(10);
        browser.sleep(2000);
        


    });
    it('addition Test 1', function(){

        homePage.getUrl("http://juliemr.github.io/protractor-demo/");
        homePage.enterFirstNumber(10);
        homePage.enterSecondNumber(5);
        homePage.clickgoButton();
        homePage.verifyResult(15);
        browser.sleep(2000);
        
        

    });



});