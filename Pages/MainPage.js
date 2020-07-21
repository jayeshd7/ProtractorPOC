let homePage = function(){
    let first = element(by.model('first'));
    let second = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.getUrl = function(url){
        browser.get(url);
    }

    this.enterFirstNumber = function(firstNo){
        first.sendKeys(firstNo);
    }
    this.enterSecondNumber = function(secondNo){
        second.sendKeys(secondNo);
     }
     this.clickgoButton = function(){
         goButton.click();
     }
     this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
     }
};
module.exports = new homePage();