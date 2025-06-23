# jscolor-logger

A lightweight, colorful logger for Node.js and TypeScript applications with icons and formatting.

## Installation

```sh
npm install jscolor-logger
```

## Usage

### JavaScript (CommonJS)

Import the logger:

```js
const { logger } = require('jscolor-logger');
```

Or create a custom logger instance:

```js
const { jslogger } = require('jscolor-logger');
const logger = new jslogger({ logLevel: 'debug', colorize: true });
```

### TypeScript / ES Modules

Import the logger:

```ts
import { logger } from 'jscolor-logger';
```

Or create a custom logger instance:

```ts
import { jslogger } from 'jscolor-logger';
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

See [examples/advanced-usage.js](examples/advanced-usage.js), [examples/advanced-usage.ts](examples/advanced-usage.ts), [examples/custom-logger.js](examples/custom-logger.js), and [examples/custom-logger.ts](examples/custom-logger.ts) for more.

## API Documentation

See [docs/API.md](docs/API.md) for detailed documentation.

## License

MIT