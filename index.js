const { jslogger } = require('./src/logger');
const { createLogger } = require('./src/utils');

// Create default instance
const logger = new jslogger();

module.exports = {
  jslogger,
  logger,
  createLogger
};
