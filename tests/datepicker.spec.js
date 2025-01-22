const {test,expect}=require('@playwright/test')

test('DatePicker',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.locator('#datepicker').fill('01/21/2025')

    //date picker
    const currentyear='2025'
    const currentmonth='January'
    const currentdate='21'

    await page.click('#datepicker')

    while(true){

       
        const year=await page.locator('.ui-datepicker-year').textContent()
        const month=await page.locator('.ui-datepicker-month').textContent()

        if( year==currentyear && month==currentmonth){

            break;

        }

        await page.locator('//a[@title="Next"]').click() //next button
        //await page.locator('//a[@title="Prev"]').click() //previous button for selection of previous years
        
    }

   
    /* const dates=await page.$$('.ui-state-default')

    for(let dt of dates){

        if(await dt.textContent()==currentdate){
            await dt.click()
            break;
        }

    } */

    await page.click('//a[@data-date="21"]')
    


    await page.waitForTimeout(5000)

    await page.close()

})