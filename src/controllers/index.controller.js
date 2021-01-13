// Controller init
const ctrl = {};

// Handlers
ctrl.renderIndex = function(req, res, next) {
  req.render('pages/index');
}

// Exporting
module.exports = ctrl;
