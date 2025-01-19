const {test,expect}=require('@playwright/test')

test('Assertions',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    //hard assertions 

    const text=await page.locator('.page-title h1')
    await expect(text).toHaveText('Register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //soft assertions

    await expect.soft(page).toHaveTitle('nopCommerce demo store. Register')

    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register')
    
})