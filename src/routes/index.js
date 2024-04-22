const newsRouter = require("./news");
const sideRouter = require("./site");
function route(app) {
  app.use("/news", newsRouter);

  app.use("/", sideRouter);
}

module.exports = route;
