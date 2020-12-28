import nc from 'next-connect';
const puppeteer = require('puppeteer');

export default async (req, res) => {
  if (req.method === 'POST') {
    console.log(req.body);

    const {
      firstName,
      middleInitial,
      lastName,
      ssn,
      dateOfBirth,
      income,
      zipCode,
      streetAddress,
      suiteAddress,
      city,
      state,
      email,
      mobilePhone,
      altPhone,
    } = req.body;
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://d.comenity.net/petland/public/apply/ApplyIntro.xhtml');

    await page.$eval('input[name=inpName_firstName_input]', (el, value) => (el.value = value), firstName);

    await page.$eval('input[name=inpName_middleInitial_input]', (el, value) => (el.value = value), middleInitial);
    await page.$eval('input[name=inpName_lastName_input]', (el, value) => (el.value = value), lastName);
    await page.$eval('input[name=inpssn_SSN]', (el, value) => (el.value = value), ssn);
    await page.$eval('input[name=inpDob_input]', (el, value) => (el.value = value), dateOfBirth);
    await page.$eval('input[name=annualIncome_input]', (el, value) => (el.value = value), income);
    await page.$eval('input[name=inpAddress_usZipInstantCredit_input]', (el, value) => (el.value = value), zipCode);

    await page.$eval('input[name=inpAddress_streetAddress_input]', (el, value) => (el.value = value), streetAddress);
    await page.$eval('input[name=inpAddress_line2_input]', (el, value) => (el.value = value), suiteAddress);
    await page.$eval('input[name=inpAddress_usCity_input]', (el, value) => (el.value = value), city);
    await page.$eval('input[name=annualIncome_input]', (el, value) => (el.value = value), state);
    await page.$eval('input[name=email_input]', (el, value) => (el.value = value), email);
    await page.$eval('input[name=confirmEmail_input]', (el, value) => (el.value = value), email);
    await page.$eval('input[name=inpMobilePhone_fullPhoneNumber]', (el, value) => (el.value = value), mobilePhone);
    await page.$eval('input[name=inpAltPhone_fullPhoneNumber]', (el, value) => (el.value = value), altPhone);
  }
};
