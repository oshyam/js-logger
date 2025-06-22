import { jslogger } from "./logger";
import { defaultOptions } from "./constants";
type optionsType = {
  showTimestamp: boolean;
  logLevel: "warn" | "success" | "error" | "info" | "debug";
  colorize: boolean;
};

export function createLogger(
  options: optionsType = { ...(defaultOptions as optionsType) }
) {
  return new jslogger(options);
}
