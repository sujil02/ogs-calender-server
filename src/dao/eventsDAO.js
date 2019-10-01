/**
 * @file eventsDAO.js
 * @author Ripan Halder
* @version 1.0
* @since 09/29/2019
* @copyright Northeastern University
*/

const eventsModel = require('../models/eventModel.js');
const LOGGER = require('../logger/logger.js');
const FILE_NAME = 'eventsDAO.js';

/**
 * @description This functions returns all results which were fetched by the query executed.
 * @memberof eventsDAO
 * @function find
 * @param {Object}
 * @param {function} callback
 */
function find(query, attributes, callback) {
    LOGGER.debug('DAO : Entering  :: ' + FILE_NAME);
    eventsModel.find(query, attributes, function (err, events) {
        if (err) {
            LOGGER.error('Error occured in config :: ' + FILE_NAME + ' ' + err);
            return callback(err, null);
        } else {
            LOGGER.debug('Exiting from config :: ' + FILE_NAME);
            return callback(null, events);
        }
    });
}

module.exports = {
    find
}
