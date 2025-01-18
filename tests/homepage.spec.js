const {test,expect}=require('@playwright/test');

test('Home Page',async ({page})=>{

 await page.goto('https://www.demoblaze.com/');

 const pagetitle=await page.title();
 console.log('Title of the page is', pagetitle);

 await expect(page).toHaveTitle('STORE');

 const pageuRL= page.url('https://www.demoblaze.com/');
 console.log('URL of the page is:',pageuRL);

 await expect(page).toHaveURL('https://www.demoblaze.com/');

 await page.close();

})
