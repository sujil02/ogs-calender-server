/**
 * @file eventsService.js
 * @author Ripan Halder
* @version 1.0
* @since 09/29/2019
* @copyright Northeastern University
*/


//LOGGER
const LOGGER = require('../logger/logger.js');

//DAO
const eventsDAO = require('../dao/eventsDAO.js');
const FILE_NAME = 'eventsService.js';

/**
 * @description find all events
 * @memberof eventsService
 * @function getAllEvents
 * @param {Object}
 * @param {function} callback
 */

function getAllEvents(q, callback) {

	var query = {};
	var attributes = { _id: 0 };
	eventsDAO.find(query, attributes, function (error, events) {
		if (error) {
			LOGGER.debug("Unable to access " + FILE_NAME);
			return callback(new Error('unable to find events.'), null);
		} else {

			return callback(null, events);
		}
	});
}

module.exports = {
	getAllEvents
}
