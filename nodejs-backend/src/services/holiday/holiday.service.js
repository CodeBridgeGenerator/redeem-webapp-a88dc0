const { Holiday } = require('./holiday.class');
const createModel = require('../../models/holiday.model');
const hooks = require('./holiday.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/holiday', new Holiday(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('holiday');

  // Get the schema of the collections 
  app.get("/holidaySchema", function (request, response) {
    const schema = createModel(app).schema.tree;
    const result = Object.keys(schema).map(key => {
      return {
        field: key,
        properties: schema[key]
      };
    });
    return response.status(200).json(result);
  });

  service.hooks(hooks);
};