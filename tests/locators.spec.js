//const {test,expect}=require('@playwright/test')

import {test,expect} from '@playwright/test'
test('Locators',async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    //await page.locator('id=login2').click()
    await page.click('id=login2')

    await page.locator('#loginusername').fill('pavanol')
    //await page.locator('#loginusername').type('pavanol')

    await page.fill('#loginpassword','test@123')
    //await page.type('#loginpassword','test@123')

    await page.click('//button[@onclick="logIn()"]')

    const logout=await page.locator('id=logout2')
    await expect(logout).toBeVisible()

    await page.close()



})