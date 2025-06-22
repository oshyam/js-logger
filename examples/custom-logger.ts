// Custom logger implementation example
import { jslogger } from "../src/logger";
class CustomLogger extends jslogger {
  success(...args: any) {
    console.log("\x1b[32m%s\x1b[0m", `✅ [SUCCESS] ${args.join(" ")}`);
  }
}

const customLogger = new CustomLogger({ logLevel: "info" });
customLogger.success("Operation completed successfully!");
