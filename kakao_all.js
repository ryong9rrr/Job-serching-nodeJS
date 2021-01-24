const axios = require("axios");
const cheerio = require("cheerio");
const kakao_URL = "https://careers.kakao.com/jobs?";

const getHtml = async () => {
  const response = await axios.get(kakao_URL);
  return response;
};

getHtml().then((html) => {
  const $ = cheerio.load(html.data);
  const $getPages = $("span.inner_pages").children("a.link_page");

  console.log($getPages.text());
});
