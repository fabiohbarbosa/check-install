import controller from '../../client/controller';
const ENDPOINT = '/client/';

module.exports = (router) =>
  router.get(ENDPOINT + ':id', controller.get);

module.exports = (router) =>
  router.post(ENDPOINT, controller.post);
