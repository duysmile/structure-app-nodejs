const { serverConfig } = require('../config');
const logger = require('../components/logger');

const app = require('./server');
const errorHandler = require('../components/error-handler');
const { traceRequest } = require('../middlewares/tracer');
const { initTracer } = require('../components/tracing');

function runServer(app, port) {
    return new Promise(res => {
        app.listen(port, res);
    });
}

async function main() {
    const port = serverConfig.port;

    // initialize components
    initTracer();

    // inject tracer
    app.use(traceRequest);

    // inject api

    // inject error handler
    app.use(errorHandler);

    await runServer(app, port);
}

main.catch(err => {
    logger.error(err, 'kill process');
    process.exit(1);
});
