const {test,expect}=require('@playwright/test');

test('MultipleWebElements',async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

   /* const links= await page.$$('a')

    for(const link of links){
       const linktext= await link.textContent()
       console.log(linktext)
    } */



    await page.waitForSelector('//div[@id="tbodyid"]//div//h4/a')
    const products=await page.$$('//div[@id="tbodyid"]//div//h4/a')

    for(const product of products){
        const producttext=await product.textContent();
        console.log(producttext)
    }

})