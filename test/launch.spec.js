describe('My application', () => {
    it('launch amazon web site', async () => {
        await browser.url(`https://amazon.in/`);
        await browser.pause(2000)

    });
});
