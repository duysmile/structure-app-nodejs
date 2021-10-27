const app = require('./server');
const { serverConfig } = require('../config');

function runServer(app, port) {
    return new Promise(res => {
        app.listen(port, res);
    });
}

async function main() {
    const port = serverConfig.port;

    await runServer(app, port);

}
