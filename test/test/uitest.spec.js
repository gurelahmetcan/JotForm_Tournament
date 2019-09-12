const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: true, //Turns on browser UI
    slowMo: 250
  });
  let text = 'gurelahmetcan'

  const page = await browser.newPage();
  await page.goto('http://localhost:3000/Login');
  await page.click('#login');
  await page.url('https://www.jotform.com/api/oauth.php?registrationType=oauth&ref=http%3A%2F%2Flocalhost%3A3000%2FLogin&client_id=localhost:3000&access_type=readOnly&auth_type=login')
  const frameElement = await page.$('#jotform_oauth_frame');
  //console.log(frameElement);
  //await page.screenshot({path: 'deneme.png'});

  const iframeDocument = frameElement.contentDocument || frameElement.contentWindow.document;
  const username = await iframeDocument.$('#username');

  // username and password kismi cikiyor oralari doldur. gurelahmetcan Acan1998% class : loginField
  //await page.type('#username', 'gurelahmetcan');
  console.log('username write')

})();