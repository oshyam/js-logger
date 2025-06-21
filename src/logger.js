const chalk = require('chalk');
const { icons, logLevels, defaultOptions } = require('./constants');

class jslogger {
  constructor(options = {}) {
    this.options = { ...defaultOptions, ...options };
  }

  _log(type, color, args) {
    // The 'success' level is an alias for 'info' but with a different icon/color.
    const levelToCheck = type === 'success' ? 'info' : type;
    if (!this.shouldLog(levelToCheck)) {
      return;
    }

    const message = args
      .map(arg => {
        if (typeof arg === 'object' && arg !== null) {
          // Pretty-print objects for better readability
          return JSON.stringify(arg, null, 2);
        }
        return String(arg);
      })
      .join(' ');

    const formatted = this.formatMessage(message, type);
    const logFunction = type === 'error' ? console.error : type === 'warn' ? console.warn : console.log;

    logFunction(this.options.colorize ? color(formatted) : formatted);
  }

  formatMessage(message, type) {
    const timestamp = this.options.showTimestamp
      ? chalk.gray(`[${new Date().toISOString()}]`)
      : '';
    const icon = icons[type] || icons.info;
    const label = chalk.bold(`[${type.toUpperCase()}]`);

    return `${timestamp} ${icon} ${label} ${message}`.trim();
  }

  shouldLog(type) {
    // Ensure the type exists in our levels to prevent errors
    if (!logLevels.hasOwnProperty(type)) {
      return false;
    }
    return logLevels[type] >= logLevels[this.options.logLevel];
  }

  info(...args) {
    this._log('info', chalk.blue, args);
  }

  success(...args) {
    this._log('success', chalk.green, args);
  }

  warn(...args) {
    this._log('warn', chalk.yellow, args);
  }

  error(...args) {
    this._log('error', chalk.red, args);
  }

  debug(...args) {
    this._log('debug', chalk.magenta, args);
  }
}

module.exports = { jslogger };
