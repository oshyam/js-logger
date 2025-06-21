const { jslogger } = require('./logger');

function createLogger(options = {}) {
  return new jslogger(options);
}

module.exports = {
  createLogger
};
