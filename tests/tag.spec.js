const {test,expect}=require('@playwright/test')

test('Test1@sanity',async ({page})=>{

    console.log('This is 1st test')
})

test('Test2@sanity',async ({page})=>{

    console.log('This is 2nd test')
})

test('Test3@regression',async ({page})=>{

    console.log('This is 3rd test')
})

test('Test4@regression',async ({page})=>{

    console.log('This is 4th test')
})

test('Test1@sanity@regression',async ({page})=>{

    console.log('This is 5th test')
})

//command: npx playwright test tests/tag.spec.js --project=chromium --headed -g "@sanity"