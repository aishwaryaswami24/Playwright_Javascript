const {test,expect,chromium}=require('@playwright/test')

test('MultiplePgaes',async ()=>{

    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()

    const allpages=context.pages()
    console.log('All pages are:',allpages.length)
    await page.goto('')
})