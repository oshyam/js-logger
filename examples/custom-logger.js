// Custom logger implementation example
const { jslogger } = require('../index');

class CustomLogger extends jslogger {
  success(...args) {
    console.log('\x1b[32m%s\x1b[0m', `✅ [SUCCESS] ${args.join(' ')}`);
  }
}

const customLogger = new CustomLogger({ logLevel: 'info' });
customLogger.success('Operation completed successfully!');
