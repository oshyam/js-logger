const icons = {
  info: "ℹ️",
  success: "✅",
  warn: "⚠️",
  error: "❌",
  debug: "🐛",
};

const logLevels = {
  debug: 0,
  info: 1,
  success: 1,
  warn: 2,
  error: 3,
};

const defaultOptions = {
  showTimestamp: true,
  logLevel: "info",
  colorize: true,
};

export { icons, logLevels, defaultOptions };
