const newsRouter = require("./news");
const sideRouter = require("./site");
const courseRouter = require("./courses");
function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", courseRouter);
  app.use("/", sideRouter);
}

module.exports = route;
