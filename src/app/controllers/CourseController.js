const Course = require("../models/Course");
const {mongooseToObject} = require("../../utils/mongoose");
class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({slug: req.params.slug})
      .then((course) => {
        res.render("../../resources/views/courses/show.hbs", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }
  //[GET] /courses/create
  create(req, res) {
    res.render("../../resources/views/courses/create.hbs");
  }
  //[POST] /courses/store
  store(req, res, next) {
    // res.json(req.body);
    const formData = req.body;
    formData.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((courses) =>
        res.render("../../resources/views/courses/edit.hbs", {
          courses: mongooseToObject(courses),
        })
      )
      .catch(next);
  }
  //[PUT] /courses/:id
  update(req, res, next) {
    const formData = req.body;
    formData.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    Course.updateOne({_id: req.params.id}, formData)
      .then(() => res.redirect("/"))
      .catch(next);
  }
  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({_id: req.params.id})
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CourseController();
