const axios = require("axios");
const cheerio = require("cheerio");
const kakao_URL = "https://careers.kakao.com/jobs?";

const getHtml = async () => {
  const response = await axios.get(kakao_URL);
  return response;
};

getHtml()
  .then((html) => {
    const $ = cheerio.load(html.data);
    const $getPages = $("span.inner_pages").children("a.link_page");
    const pages = $getPages.length + 1;
    return pages;
  })
  .then((pages) => getJobs(pages));

const getJobs = (pages) => {
  for (var i = 1; i <= pages; i++) {
    const response = axios.get(`${kakao_URL}page=${i}`);
    return response;
  }
};
