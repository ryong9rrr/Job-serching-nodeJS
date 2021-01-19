import express from "express";

const server = express();

server.listen(3000, () => {
  console.log("The server is running");
});
