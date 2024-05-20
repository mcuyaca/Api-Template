import express from "express";

const PORT = 8000;

const server = express();

server.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);

export default server;
