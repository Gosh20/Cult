const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /cults/sync': 'CultController.sync',
  'GET /cults': 'CultController.getAll',
};

module.exports = publicRoutes;
