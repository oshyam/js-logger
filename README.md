# jscolor-logger

A lightweight, colorful logger for Node.js applications with icons and formatting.

## Installation

```sh
npm install jscolor-logger
```

## Usage

Import the logger:

```js
const { logger } = require('jscolor-logger');
```

Or create a custom logger instance:

```js
const { jslogger } = require('jscolor-logger');
const logger = new jslogger({ logLevel: 'debug', colorize: true });
```

### Log Methods

```js
logger.info('Application started');
logger.success('Database connected successfully');
logger.warn('Memory usage is high');
logger.error('Failed to connect to external API');
logger.debug('User authentication flow started');
```

## Advanced Usage

See [examples/advanced-usage.js](examples/advanced-usage.js) and [examples/custom-logger.js](examples/custom-logger.js) for more.

## API Documentation

See [docs/API.md](docs/API.md) for detailed documentation.

## License

MIT