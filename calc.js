
describe('add the numbers', function(){
    it('addition test ', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
       // console.log(browser.getCurrentUrl());

        var input = element(by.model('first'));
        input.sendKeys('23');
        var second = element(by.model('second'));
        second.sendKeys('27');
        var clickButton = element(by.css('[ng-click="doAddition()"]'));
        clickButton.click();
        browser.sleep(2000);
        var result = element(by.cssContainingText('.ng-binding', '50'));
        expect(result.getText()).toEqual('50');
        
        element(by.css('input[ng-model="first"]')).clear().sendKeys('5');
        element(by.css('select[ng-model="operator"]')).click();
        
        /*
        @Learning - Drop Down select  
        */
        var select = element(by.model('operator'));
        select.$('[value="MULTIPLICATION"]').click(); 
        

        


        element(by.css('input[ng-model="second"]')).click();
        element(by.css('input[ng-model="second"]')).clear().sendKeys('5');
        element(by.css('button')).click();
        browser.sleep(2000);
        var result1 = element(by.cssContainingText('.ng-binding', '25'));
        expect(result1.getText()).toEqual('25');
        


    });


});
