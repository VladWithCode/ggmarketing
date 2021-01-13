// Controller init
const ctrl = {};

// Render handlers
ctrl.renderIndex = function(req, res, next) {
  res.render('pages/index');
}

ctrl.renderAbout = function (req, res, next) {
  res.render('pages/about');
}

ctrl.renderProjects = function (req, res, next) {
  res.render('pages/projects');
}

ctrl.renderContact = function (req, res, next) {
  res.render('pages/contact');
}

// Exporting
module.exports = ctrl;
