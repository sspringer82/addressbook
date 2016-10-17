const model = require('./model');

class Controller {

  get(req, res) {
    res.send(model.get(req.params.id));
  }

  getAll(req, res) {
    res.send(model.getAll());
  }

  create(req, res) {
    res.send(model.create(req.body));
  }

  update(req, res) {
    res.send(model.update(req.body, req.params.id));
  }
  
  delete(req, res) {
    res.send(model.delete(req.params.id));
  }
}
module.exports = Controller;
