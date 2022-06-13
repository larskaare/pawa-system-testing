'use strict';

const { logger } = require('../lib/logger.js');
const { port, host } = require('../lib/app-config');

const loglevel = require('../lib/logger.js').loglevel().server;

logger.info('Server loglevel: ' + loglevel);

//Instansiating server using fastify, passing the fastify config object as param.
const server = require('../src/app').build({
    logger: {
        level: loglevel,
        name: 'Quote Server',
    },
    port: port,
});

server.listen(port, host, (err) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
});
