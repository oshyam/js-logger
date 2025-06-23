// Advanced configuration example
import { jslogger } from "../src/logger";

const logger = new jslogger({ logLevel: "debug" });
logger.debug("Debugging enabled!");
logger.error("Custom error message with data:", {
  code: 500,
  reason: "Server Error",
});
