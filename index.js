const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
   await page.setDefaultNavigationTimeout(0);
  await page.goto('https://xshss.sse.codesandbox.io/lyrics?artist=disturbed&song=stricken');
  await page.screenshot({ path: 'example.png' });
  await page.waitForNavigation({
    waitUntil: 'networkidle0',
  });
  await browser.close();
})();
