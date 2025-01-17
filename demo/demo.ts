import { logger, consoleTransport, mapConsoleTransport } from "../src";

const config = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },
    extensionColors: {
      root: "magenta",
      home: "grey",
      user: "blue",
    },
  },
};

var log = logger.createLogger(config);
var rootLog = log.extend("root");
var homeLog = log.extend("home");
var userLog = log.extend("user");

log.debug("Simple log");

rootLog.warn("Magenta extension and bright yellow message");
homeLog.error("Gray extension and bright red message");

rootLog.error("Root error log message");

userLog.debug("User logged in correctly");
userLog.error("User wrong password");

rootLog.info("Log Object:", { a: 1, b: 2 });
