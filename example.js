const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({headless: false,
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'});
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    // Click on search box

    const searchBox = await page.$x("//input[@title]");

    if (searchBox.length > 0) {
        await searchBox[0].click();
    } else {
        throw new Error("Link not found");
    }
    await Promise.all(
        [
            await page.keyboard.type("Blackpink"),
    // Hit enter
    await page.keyboard.press('Enter'),
            await page.waitForNavigation()
]);
    browser.close();

})();
