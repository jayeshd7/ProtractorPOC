describe('Type Describe', function (){
	it('Type fetch details', async function () {
 		browser.waitForAngular
		await browser.get('http://juliemr.github.io/protractor-demo/');
	
		await expect(browser.getTitle()).toEqual('Super Calculator');			

	});
});