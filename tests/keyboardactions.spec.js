const {test,expect}=require('@playwright/test')

test('Keyboardactions',async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare')

    await page.locator('//textarea[@name="text1"]').fill('Hi there I am learning Javascript!')

    await page.keyboard.press('Control+A')

    await page.keyboard.press('Control+C')

    await page.keyboard.down('Tab')
    //await page.keyboard.up('Tab')

    //instead of Tab we can use location of 2nd place and ctrl+v

    //await page.locator('//textarea[@name="text2"]').click()

    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000)
    await page.close()

})