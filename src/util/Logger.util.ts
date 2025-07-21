import { ConditionalLogType, LogLevelType } from "../types/Logger.type";

/**
 * Custom Logger utility class for development logging
 */
export class Logger {
  // Only enable logging in development environment
  private static isDev = process.env.NODE_ENV === "development";

  /**
   * Get caller file information from stack trace
   * @returns Object containing file location or null if stack is unavailable
   */
  private static getCallerInfo() {
    const stack = new Error().stack;
    if (!stack) return null;
    const caller = stack.split("\n");

    let targetCaller = caller[3];
    for (let i = 3; i < caller.length; i++) {
      if (
        !caller[i].includes("Logger.util") &&
        !caller[i].includes("dist/index")
      ) {
        targetCaller = caller[i];
        break;
      }
    }

    const parserLineArr = targetCaller.replace(/:\d+:\d+\)/, "").split("/");
    const fileLocation =
      parserLineArr.length > 2
        ? parserLineArr[parserLineArr.length - 2].concat(
            "/",
            parserLineArr[parserLineArr.length - 1]
          )
        : parserLineArr[parserLineArr.length - 1];

    return {
      fileLocation,
    };
  }

  /**
   * Format and output log message with consistent styling
   * @param message - The message to log
   * @param method - Console method to use (warn, error, log)
   */
  private static logFormatting(message: any, method: "warn" | "error" | "log") {
    const timestamp = new Date().toISOString();
    const callerInfo = Logger.getCallerInfo();

    console[method]("==============================");
    console[method]("1. 파일 위치: ", callerInfo?.fileLocation);
    console[method]("------------------------------");
    console[method]("2. Message : ", message);
    console[method]("------------------------------");
    console[method]("3. TimeStamp : ", timestamp);
    console[method]("==============================");
  }

  /**
   * Validates if logging is enabled based on environment
   * Only allows logging in development environment
   * @returns Early return if not in development mode
   */
  private static validateEnv() {
    if (!this.isDev) return;
  }

  /**
   * Main logging method with level-based output
   * @param message - The message to log
   * @param logLevel - Log level (INFO, WARN, ERROR), defaults to INFO
   */
  static log(message: any, logLevel: LogLevelType = "INFO") {
    Logger.validateEnv();

    // Route to appropriate console method based on log level
    switch (logLevel) {
      case "WARN":
        this.logFormatting(message, "warn");
        break;
      case "ERROR":
        this.logFormatting(message, "error");
        break;
      case "INFO":
        this.logFormatting(message, "log");
        break;
    }
  }

  static when({ condition, message, logLevel = "INFO" }: ConditionalLogType) {
    Logger.validateEnv();
    if (!condition) return;
    Logger.log(message, logLevel);
  }
}
