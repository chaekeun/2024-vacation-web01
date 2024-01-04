//컴포넌트를 ReactDOMServer.renderToString함수를 이용하여 직접 임포트하여 렌더링하여 브라우저에 보내준다.

import path from "path";
import fs from "fs";
import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "../src/App";

const PORT = process.env.PORT || 3006;

const app = express();

const indexFile = path.resolve(__dirname, "../dist/index.html");

app.get("/", (req, res) => {
  const renderString = ReactDOMServer.renderToString(<App />);
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong: ", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${renderString}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(path.resolve("../dist"))));
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
