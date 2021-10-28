exports.serverConfig = {
    port: process.env.PORT || 3000,
};

exports.getCORSOrigin = () => {
    const origins = process.env.ORIGINS || '*';
    return origins.split(',').map(o => o.trim());
};

exports.tracerConfig = {

};

exports.mongoConfig = {

};

exports.commonConfig = {
    env: process.env.NODE_ENV || 'development',
    serviceName: process.env.SERVICE,
};

exports.loggerConfig = {
    service: process.env.SERVICE || 'app',
    elasticHost: process.env.ELASTIC_HOST,
    elasticUser: process.env.ELASTIC_USER,
    elasticPass: process.env.ELASTIC_PASS,
    level: process.env.LOG_LEVEL || 'info',
};
