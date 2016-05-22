import express from 'express';
import http from 'http';

import {properties, log} from "./utils"
import {apiPrivate, apiPublic} from './rest/';

// create server
log.debug('Creating server');
let app = express();
http.Server(app).listen(properties.server.port);

// cors
log.debug('Enabling cors filter');
app.use(require('cors')());

// json body
log.debug('Configuring JSON body parser');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// routes
log.debug('Creating API private routes');
apiPrivate(app, express);

log.debug('Creating API public routes');
apiPublic(app, express);

// static
log.debug('Creating static project');
app.use(express.static(properties.server.publicFolder));

log.info('Server started in port %s', properties.server.port);
