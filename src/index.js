const express = require('express');
const app = express();
const routes = require('./router.js');
const {port} = require('./constants.js');

const handlebarsConfig = require('./config/handlebarsConfig.js');
const expressConfig = require('./config/expressConfig.js');

handlebarsConfig(app);
expressConfig(app);

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port: ${port}...`));