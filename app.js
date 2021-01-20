import express from "express";
import kakao from "./kakao";

const server = express();

server.get("/api/kakao", (req, res) => {
  res.json(kakao);
});

server.listen(3000, () => {
  console.log("The server is running");
});
