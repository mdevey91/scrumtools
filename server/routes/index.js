const AuthStore = require('../store/auth');
const accountRoutes = require('./account');
const retroBoardRoutes = require('./retroBoard');


module.exports = function(app) {
  app.use('/api/v1', accountRoutes);
  app.use('/api/v1', [AuthStore.authenticate], retroBoardRoutes);
  // app.use('/api/v1/admin', [AuthStore.authenticate, AuthStore.isAdmin], require('./routes.admin'));
};