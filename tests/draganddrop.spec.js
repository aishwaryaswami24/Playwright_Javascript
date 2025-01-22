const {test,expect}=require('@playwright/test')

test('DragandDrop',async ({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    //approch1
    const stockholm=await page.locator('#box2')
    const sweden=await page.locator('#box102')

    await stockholm.hover()
    await page.mouse.down()

    await sweden.hover()
    await page.mouse.up()

    //approch2
    const madrid=await page.locator('#box7')
    const usa=await page.locator('#box103')

    await madrid.dragTo(usa)


    await page.waitForTimeout(5000)

    await page.close()


})