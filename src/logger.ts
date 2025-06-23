import { defaultOptions, icons, logLevels } from "./constants";
import chalk from "chalk";
type optionsType = {
  showTimestamp?: boolean;
  logLevel?: "warn" | "success" | "error" | "info" | "debug";
  colorize?: boolean;
};

export class jslogger {
  private options: optionsType;

  constructor(options: optionsType = defaultOptions as optionsType) {
    this.options = { ...options };
  }

  _log(
    type: "warn" | "success" | "error" | "info" | "debug",
    color: (formatted: string) => {},
    args: any
  ) {
    // The 'success' level is an alias for 'info' but with a different icon/color.
    const levelToCheck = type === "success" ? "info" : type;
    if (!this.shouldLog(levelToCheck)) {
      return;
    }

    const message = args
      .map((arg: any) => {
        if (typeof arg === "object" && arg !== null) {
          // Pretty-print objects for better readability
          return JSON.stringify(arg, null, 2);
        }
        return String(arg);
      })
      .join(" ");

    const formatted = this.formatMessage(message, type);
    const logFunction =
      type === "error"
        ? console.error
        : type === "warn"
        ? console.warn
        : console.log;

    logFunction(this.options.colorize ? color(formatted) : formatted);
  }

  formatMessage(
    message: string,
    type: "warn" | "success" | "error" | "info" | "debug"
  ) {
    const timestamp = this.options.showTimestamp
      ? chalk.gray(`[${new Date().toISOString()}]`)
      : "";
    const icon = icons[type] || icons.info;
    const label = chalk.bold(`[${type.toUpperCase()}]`);

    return `${timestamp} ${icon} ${label} ${message}`.trim();
  }

  shouldLog(type: "warn" | "success" | "error" | "info" | "debug"): boolean {
    // Ensure the type exists in our levels to prevent errors
    if (!logLevels.hasOwnProperty(type)) {
      return false;
    }
    const levelToCheck = type === "success" ? "info" : type;
    const currentLevel =
      this.options.logLevel === "success" ? "info" : this.options.logLevel;
    if (
      !levelToCheck ||
      !currentLevel ||
      !logLevels.hasOwnProperty(levelToCheck) ||
      !logLevels.hasOwnProperty(currentLevel)
    ) {
      return false;
    }
    return logLevels[levelToCheck] >= logLevels[currentLevel];
  }

  info(...args: any) {
    this._log("info", chalk.blue, args);
  }

  success(...args: any) {
    this._log("success", chalk.green, args);
  }

  warn(...args: any) {
    this._log("warn", chalk.yellow, args);
  }

  error(...args: any) {
    this._log("error", chalk.red, args);
  }

  debug(...args: any) {
    this._log("debug", chalk.magenta, args);
  }
}
