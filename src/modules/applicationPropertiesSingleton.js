/**
 * File Name: applicationPropertiesSingleton.js
 * @author Ripan Halder
 * @version 1.0
 * @since 09/29/2019
 * @copyright Northeastern University
 */

const path = require("path");
const PropertiesReader = require("properties-reader");
const appProperties = PropertiesReader(path.resolve(".") + '/src/prop/app.properties');

/**
 * These variables are used to get environment variables from the env.list file
 *
 * If you are developer, you can uncomment the line below and comment back the next line to run it on localhost.
 */
module.exports = {
  VAR_WP_PORT: appProperties.get('app.port'),
  VAR_WP_CONTEXT_PATH: appProperties.get('app.context_path'),
  VAR_DB_WP: appProperties.get('app.mongo_url'),
  VAR_LOGGER_LEVEL: appProperties.get('logger.level')
};
