// Advanced configuration example
const {jslogger} = require('../index');


const logger = new jslogger({ logLevel: 'debug' });
logger.debug('Debugging enabled!');
logger.error('Custom error message with data:', { code: 500, reason: 'Server Error' });
