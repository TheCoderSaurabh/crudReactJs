// const uuid = require('uuid');
// const uuidv4 = uuid.v4()
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    args: ["--window-size=1920,1080"],
  });

  const page = await browser.newPage();

  await page.goto("http://localhost:3000/user");

  console.log("Webpage Loaded");

  await page.setViewport({ width: 1620, height: 1080 });

  
  const coursesPageLink = "h2 > a";

  await page.waitForSelector(coursesPageLink);

  await page.click(coursesPageLink);


  const adduser = "form > button";

  await page.waitForSelector(adduser);
  await page.type('input[name=name]', 'xyztest'); 
  await page.type('input[name=email]', `${"xyztestemial"}@gmail.com`); 
  await page.evaluate(() => { 
    document.querySelector('button[type=submit]').click(); 
  })


//   await page.click(adduser);

//   await page.waitForNavigation(); 
await browser.close();

//   const coursesPageLink = ".menu > li:nth-child(3) > a";

//   await page.waitForSelector(coursesPageLink);

//   await page.click(coursesPageLink);

//   console.log("Courses Page Loaded");

//   const enrollButton = ".bg-success-btn";
//   await page.waitForSelector(enrollButton);

//   await page.click(enrollButton);

//   console.log("Namaste FSD page loaded");

  // await browser.close();
})();

// HomeWork:
// Automate whole user journey
// Run this sript everyday at 08:00 AM - CRON job
// Collect all the logs and erorrs send it to email - Amazon SES