'use strict';

const { logger } = require('../lib/logger.js');
const fastify = require('fastify');
const rateLimitAllowList = require('../lib/app-config').rateLimitAllowList();
const maxRateLimit = require('../lib/app-config').maxRateLimit();

function build(opts= {}) {

    const app = fastify(opts);

    logger.info('Initial api server plumbing');

    //Installing support for CORS headers
    app.register(require('@fastify/cors'),{
        origin: '*',
    });

    //Registering a api rate limiter
    app.register(require('@fastify/rate-limit'), {
        max: maxRateLimit,
        timeWindow: '1 minute',
        ban: 2,
        allowList: rateLimitAllowList,
        errorResponseBuilder: function (request, context) {
            logger.error('Hitting rate limit');
            return {
                code: 429,
                error: 'Too Many Requests',
                message: `The GOT Api only allow ${context.max} requests per ${context.after}. Try again soon.`,
                date: Date.now(),
                expiresIn: context.ttl,
            };
            // reply.code(429).send('Rate limit');
        },
    });


    //Adding swagger documentation
    app.register(require('@fastify/swagger'), {
        routePrefix: '/doc',
        swagger: {
            info: {
                title: 'GOT Episodes Api',
                description: 'Serving names for GOT Episodes',
                version: '0.5.0',
            },
            externalDocs: {
                url: 'https://swagger.io',
                description: 'Find more info here',
            },
            host: 'localhost:3100',
            schemes: ['http','https'],
            consumes: ['application/json'],
            produces: ['application/json'],
            tags: [
                { name: 'api/episodes', description: 'Listing episodes' }
            ],
            securityDefinitions: {
                Bearer: {
                    type: 'apiKey',
                    name: 'Authorization:',
                    in: 'header'
                },
            },
        },
        uiConfig: {
            docExpansion: 'list',
            deepLinking: false,
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        exposeRoute: true,
    });



    //Declare a root route
    app.get('/', function (req, reply) {

        const welcomeMessage = `
        
    The Game of Thrones Episodes API
        
    /api/episodes

    /api/episodes/1
    GET to get specific episode
    PUT to update specific episode
    POST to add episode
    DELETE to delete episode

    Authentication is required for all endpoints (expect for /)

    `;

        reply.send(welcomeMessage);
    });

    //Register routes to handle episodes
    const episodeRoutes = require('../routes/episodes');
    episodeRoutes.forEach((route) => {
        app.route(route);
    });


    return app;

} //build

module.exports = {build};