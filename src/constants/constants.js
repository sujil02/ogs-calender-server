/**
 * @file constants.js
 * @author Ripan Halder
* @version 1.0
* @since 09/29/2019
* @copyright Northeastern University
*/

/**
* @memberof constants
* @name  COLLECTION holds connection names
*/


const HTTP_CODE = {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    ERROR_INTERNAL_SERVER: 500,
    NOT_FOUND: 404,
    INVALID_PARAMETER: 422,
    INVALID_MISSING_PARAMETERS: 400,
};

const ERROR_DESC = Object.freeze({
    NOT_FOUND: 'Not found',
    ERROR_INTERNAL_SERVER_DESCRIPTION: 'internal server error',
    INVALID_MISSING_PARAMETERS :'INVALID_MISSING_PARAMETERS'
});


module.exports = {
    HTTP_CODE,
    ERROR_DESC,
};
