const puppeteer = require('puppeteer');

const init = async (url) => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage()
  await page.goto(url)

  const [el] = await page.$x('//*[@id="add-to-cart-button"]')
  await el.click()

  browser.close()
}

init('https://www.amazon.com/TOZO-T6-Bluetooth-Headphones-Waterproof/dp/B07RGZ5NKS/ref=lp_16225009011_1_10')