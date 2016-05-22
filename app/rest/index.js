import glob from 'glob';

exports.apiPrivate = (app, express) => {
  let router = express.Router();
  let routes = glob.sync(__dirname+'/private/**/**.js');
  routes.forEach(route => require(route)(router));
  app.use('/api', router);
};

exports.apiPublic = (app, express) => {
  let router = express.Router();
  let routes = glob.sync(__dirname+'/public/**/**.js');
  routes.forEach(route => require(route)(router));
  app.use('/api/public', router);
};
