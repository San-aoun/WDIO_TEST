describe('virsual regression test',async() => {
    beforeEach(async () => {
        await browser.url('https://www.lseg.com/en');
        browser.maximizeWindow();
    })

    it('should save some screenshots', async () => {
        //await browser.saveScreen('examplePaged', {})
        await browser.saveFullPageScreen('fullPage', {})
    })

    it('should compare successful with a baseline', async () => {
        await expect(await browser.checkFullPageScreen('fullPage', {})).toEqual(0)

    })

    // it('should compare successful with a different baseline is failed', async () => {
    //     await expect(await browser.checkFullPageScreen('failPage', {})).toEqual(0)

    // })
})