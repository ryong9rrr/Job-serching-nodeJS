import axios from "axios";
import cheerio from "cheerio";

let kakao_URL = "https://careers.kakao.com/jobs?";
/*
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
*/

export let getJobs = async () => {
  //const response = axios.get(`${kakao_URL}page=1`);
  let page = await axios.get(`${kakao_URL}page=1`);
  let jobList = [];
  let $ = cheerio.load(page.data);
  let $getJobs = $("ul.list_jobs").children("li");

  $getJobs.each(function (i, elem) {
    jobList[i] = {
      id: i,
      title: $(this).find("h4.tit_jobs").text(),
      href: $(this).find("a").attr("href"),
    };
  });
  return jobList;
};
/*
getJobs().then((page) => {
  let jobList = [];
  let $ = cheerio.load(page.data);
  let $getJobs = $("ul.list_jobs").children("li");

  $getJobs.each(function (i, elem) {
    jobList[i] = {
      id: i,
      title: $(this).find("h4.tit_jobs").text(),
      href: $(this).find("a").attr("href"),
    };
  });
  return jobList;
});
*/
//.then((res) => console.log(res));

// 이런식으로 리스트를 만들면 되는데... 내일은 링크타고 들어가서 파싱하기
// 링크타고 들어가서 리스트 다시만들기
// key 값도 줘야하나?
//isLoading = false 를 주고 다시...?
