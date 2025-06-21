// Usage examples for jscolor-logger
const { jslogger } = require('../index');

const logger = new jslogger({ logLevel: 'debug' });
logger.info('Info with icon!');
logger.warn('Warning with icon!');
logger.error('Error with icon!');
logger.debug('Debug with icon!');

console.log('\n--- Testing logger with color disabled ---');
const loggerNoColor = new jslogger({ colorize: false });
loggerNoColor.info('Info without color!');
