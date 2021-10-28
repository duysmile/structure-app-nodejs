exports.serverConfig = {
    port: process.env.PORT || 3000,
};

exports.getCORSOrigin = () => {
    const origins = process.env.ORIGINS || '*';
    return origins.split(',').map(o => o.trim());
};
