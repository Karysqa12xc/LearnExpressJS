const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema(
  {
    name: {type: String},
    description: {type: String, maxLength: 600},
    img: {type: String, require: true},
    videoId: {type: String, require: true},
    slug: { type: String, slug: 'name', unique: true},
  },
  {timestamps: true}
);

module.exports = mongoose.model("Course", Course);
