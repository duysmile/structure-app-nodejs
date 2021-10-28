const VLogger = require('@vnlp/logger');

module.exports = new VLogger({
    service: process.env.SERVICE,
    elasticHost: process.env.ELASTIC_HOST,
    elasticUser: process.env.ELASTIC_USER,
    elasticPass: process.env.ELASTIC_PASS,
    level: process.env.LOG_LEVEL,
});
