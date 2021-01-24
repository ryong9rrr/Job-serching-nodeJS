const axios = require("axios");
const cheerio = require("cheerio");

const getKakao = async () => {
  try {
    return await axios.get("https://careers.kakao.com/jobs?page=2");
  } catch (error) {
    console.error(error);
  }
};

getKakao()
  .then((html) => {
    let list = [];
    const $ = cheerio.load(html.data);
    const $bodyData = $("div.p_cont").children("div.group_blind");

    $bodyData.each(function (i, elem) {
      list[i] = {
        title: $(this).find("strong.tit_info").text(),
      };
    });

    const data = list.filter((n) => n.title);
    return data;
  })
  .then((res) => console.log(res));
