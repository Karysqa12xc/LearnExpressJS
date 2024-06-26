const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const route = require("./routes");
const methodOverride = require('method-override')
const db = require("./config/database");
//Connect to database
db.connect();
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(morgan("combined"));
app.use(methodOverride('_method'))
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
