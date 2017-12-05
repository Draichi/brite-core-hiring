var api = require('../api/risk');

module.exports = function(app) {
  app.route('/risks')
    .get(api.list)
    .post(api.post);
  app.route('/risks/:id')
    .get(api.find)
    .put(api.edit)
    .delete(api.del);
}