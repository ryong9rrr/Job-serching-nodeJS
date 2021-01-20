const axios = require("axios");

const getKakao = async () => {
  try {
    const response = await axios.get(
      "https://careers.kakao.com/2021-developer"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

getKakao();
