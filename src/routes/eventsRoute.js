/**
* @file eventsRoute.js
* @author Ripan Halder
* @version 1.0
* @since 09/29/2019
* @copyright Northeastern University
*/

// MODULES
const path = require('path');
const express = require('express');
const router = express.Router();

// SERVICE
const eventsService = require('../services/eventsService.js');
// UTILS
const constants = require('../constants/constants.js');


// LOGGER
const LOGGER = require(path.resolve('.') + '/src/logger/logger.js');
const FILE_NAME = 'eventsRoute.js';

/**
 * @description Get All Events
 * @memberof eventsRoute.js
 * @function /events
 * @param  {object} req HTTP request
 * @param  {object} res HTTP response
 */


router.get('/events', function (req, res) {
	LOGGER.debug('Entering into Get All Events Route:: ' + FILE_NAME);

	var responseObject = {};

	eventsService.getAllEvents(req.query, function (err, result) {
		if (err) {
			LOGGER.error('Error in Get All Events Route /  :: ' + FILE_NAME + ' :: ' + err);
			res.status(constants.HTTP_CODE.ERROR_INTERNAL_SERVER);
			responseObject.code = constants.ERROR_DESC.ERROR_INTERNAL_SERVER_DESCRIPTION;
			responseObject.description = constants.ERROR_DESC.ERROR_INTERNAL_SERVER_DESCRIPTION;
		} else {
			responseObject = result;
		}

		LOGGER.debug('Exiting from get all Events Route /  :: ' + FILE_NAME);
		res.send(responseObject);
	});

});

module.exports = router;
