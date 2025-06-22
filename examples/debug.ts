import { jslogger } from "../src/logger";

const logger = new jslogger({ logLevel: "debug" });

logger.debug("This is a debug message");
logger.info("This is an info message");
logger.success("This is a success message");
logger.warn("This is a warning message");
logger.error("This is an error message");
