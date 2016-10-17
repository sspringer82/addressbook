const Controller = require('./controller');

function router (app) {
  const controller = new Controller();

  app.get('/address/:id', controller.get);
  app.get('/address', controller.getAll);
  app.post('/address', controller.create);
  app.put('/address/:id', controller.update);
  app.delete('/address/:id', controller.delete);
}
module.exports = router;
