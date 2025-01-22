const {test,expect}=require('@playwright/test')

test('Mouse_Hover',async ({page})=>{

    await page.goto('https://www.opencart.com/index.php?route=cms/demo')

    const register=await page.locator('//a[@class="btn btn-black navbar-btn"]')
    await register.hover()

    const button=await page.locator('//a[text()="Official Documentation"]')
    await button.click({button:'right'})

    await page.goto('https://testautomationpractice.blogspot.com/')
    const copytext=await page.locator('//button[text()="Copy Text"]')
    await copytext.dblclick()

    const textvalue=await page.locator('#field2')
    await expect(textvalue).toHaveValue('Hello World!')

    await page.waitForTimeout(5000)
    await page.close()
})