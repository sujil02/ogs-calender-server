/**
 * @file logger.js
 * @author Ripan Halder
* @version 1.0
* @since 09/29/2019
* @copyright Northeastern University
*/

const applicationPropertiesSingleton = require('../modules/applicationPropertiesSingleton');

var log4js = require('log4js');
var logger = log4js.getLogger();
var debugLevel = applicationPropertiesSingleton.VAR_LOGGER_LEVEL;

log4js.configure({
    appenders: {
        out: {
            type: 'stdout'
        },
        app: {
            type: 'file',
            filename: './src/logs/ogs-Calendar-Server.log',
            maxLogSize: 10485760,
            backups: 1,
            compress: true
        }
    },
    categories: {
        default: {
            appenders: ['out', 'app'],
            level: debugLevel
        }
    }
});

logger.debug('Logger Level On : ', debugLevel);

module.exports = logger;
