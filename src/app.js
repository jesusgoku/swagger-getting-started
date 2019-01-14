
const SwaggerUI = require('swagger-ui');
const spec = require('../config/swagger-config.json');
// const spec = require('../config/swagger-config.yml');

require('swagger-ui/dist/swagger-ui.css');

SwaggerUI({
  spec,
  dom_id: '#app',
});
