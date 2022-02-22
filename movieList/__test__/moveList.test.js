const {Builder, Capabilities, By} = require('selenium-webdriver');
require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('delete a movie', async () => {
    const searchTerm = 'Lord of the Rings: The Fellowship of the Ring';
    const inputField = await driver.findElement(By.css('input'));
    await inputField.sendKeys(searchTerm);
    await driver.sleep(3000);
    const movieButton = await driver.findElement(By.css('button'));
    await movieButton.click();
    await driver.sleep(3000);

    const enterTerm = await driver.findElement(By.xpath('//li/span')).getText();
    expect(enterTerm).toBe(searchTerm)
    await driver.sleep(3000)

    const deleteButton = await driver.findElement(By.xpath('//li/button'));
    await deleteButton.click();
    await driver.sleep(3000);
});

test('cross out a movie', async () => {
    const searchTerm = 'Lord of the Rings: The Two Towers';
    const inputField = await driver.findElement(By.css('input'));
    await inputField.sendKeys(searchTerm);
    await driver.sleep(3000);
    const movieButton = await driver.findElement(By.css('button'));
    await movieButton.click();
    await driver.sleep(3000);

    const enterTerm = await driver.findElement(By.xpath('//li/span')).getText();
    expect(enterTerm).toBe(searchTerm)
    await driver.sleep(3000)

    const crossOut = await driver.findElement(By.xpath('//li/span'));
    await crossOut.click();
    await driver.sleep(3000);
});

test('uncross a movie that was crossed out', async () => {
    const searchTerm = 'Lord of the Rings: The Return of the King';
    const inputField = await driver.findElement(By.css('input'));
    await inputField.sendKeys(searchTerm);
    await driver.sleep(3000);
    const movieButton = await driver.findElement(By.css('button'));
    await movieButton.click();
    await driver.sleep(3000);

    const enterTerm = await driver.findElement(By.xpath('//li/span')).getText();
    expect(enterTerm).toBe(searchTerm)
    await driver.sleep(3000)

    const crossOut = await driver.findElement(By.xpath('//li/span'));
    await crossOut.click();
    await driver.sleep(3000);

    const uncross = await driver.findElement(By.xpath('//li/span'));
    await uncross.click();
    await driver.sleep(3000);
});

