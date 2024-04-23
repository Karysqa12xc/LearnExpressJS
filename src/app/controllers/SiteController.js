const Course = require("../models/Course")
const { multipleMongooseToObject }  = require("../../utils/mongoose");
class SiteController{
    //[GET] /home
    index(req, res, next){
        Course.find({}).then(courses => {
            res.render('home', {
                courses : multipleMongooseToObject(courses)
            });
        }).catch(next);
        
    }
    //[GET] /search
    search(req, res){
        res.render("search");
    }
    //[GET] /link
    link(req, res){
        res.render("link");
    }
}

module.exports = new SiteController;
