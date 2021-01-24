const axios = require("axios");
const cheerio = require("cheerio");

const getPages = async () => {
  const response = await axios.get(`https://careers.kakao.com/jobs?`);
  console.log(response.data);
};

getPages();
