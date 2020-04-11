import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { log } from './utils/elemental.utils';
import config from './config/config'

global.app = express();

app.use(morgan('combined'));
app.use(bodyParser.json({
    limit: '100mb'
}));

app.use(function (req, res, next) {
    log(`${req.method} ${req.url}`);

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    try {
        return next();
    } catch (err) {
        return res.sendStatus(500);
    }
});

require('./routes');

const server = app.listen(config.port, () => {
    log("Server is listening to port", config.port);
});

server.setTimeout(60000);

export default app;

