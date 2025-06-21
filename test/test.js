const { logger, createLogger } = require('../index');

console.log('Testing Simple Colored Logger...\n');

// Test default logger
logger.info('Testing info message');
logger.success('Testing success message');
logger.warn('Testing warning message');
logger.error('Testing error message');
logger.debug('Testing debug message');

// Test custom logger
const customLogger = createLogger({
  showTimestamp: false,
  logLevel: 'warn'
});

console.log('\nTesting custom logger (warn level, no timestamp):');
customLogger.info('This should not show');
customLogger.warn('This should show');
customLogger.error('This should also show');

console.log('\nAll tests completed!');
