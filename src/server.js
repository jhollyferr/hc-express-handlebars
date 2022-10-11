const express = require("express");
const handlebars = require("express-handlebars");
const routes = require("./routes/index.js");
const path = require("path");

const main = () => {
  try {
    const server = express();
    const port = 3080;
    const layoutsDir = path.join(__dirname, "../views");
    const partialsDir = [path.join(__dirname, layoutsDir + "/partials")];
    const publicPath = path.join(__dirname, "../public");

    server.use(express.static(publicPath));

    handlebars.create({
      partialsDir,
      layoutsDir,
    });

    const handlebarsOptions = handlebars.engine({
      extname: "hbs",
    });

    server.engine(".hbs", handlebarsOptions);
    server.set("view engine", ".hbs");

    server.use("/api/v1", routes);

    server.listen(port, () => {});
  } catch (error) {
    console.error(error);
  }
};

main();
