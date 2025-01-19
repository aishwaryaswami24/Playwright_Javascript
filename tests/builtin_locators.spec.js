const {test,expect}=require('@playwright/test')

test('Builtin_Locators',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo=await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button',{type:'submit'}).click()

    //await expect(await page.getByText('jackson davidtony')).toBeVisible()

     const name_text=await page.locator('//p[@data-v-bdd6d943]').textContent()
    await expect(await page.getByText(name_text)).toBeVisible() 

})