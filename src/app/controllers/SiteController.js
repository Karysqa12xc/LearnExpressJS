class SiteController{
    //[GET] /home
    index(req, res){
        res.render('home');
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
