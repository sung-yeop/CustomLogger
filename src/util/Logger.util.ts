import { LogLevelType } from "../types/Logger.type";

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
    const stack = new Error().stack; // Get stack trace
    if (!stack) return null;
    const caller = stack.split("\n");
    // Remove line numbers and column info from stack trace
    const parserLineArr = caller[3].replace(/:\d+:\d+\)/, "").split("/");
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
   * Main logging method with level-based output
   * @param message - The message to log
   * @param logLevel - Log level (INFO, WARN, ERROR), defaults to INFO
   */
  static log(message: any, logLevel: LogLevelType = "INFO") {
    // Skip logging in production environment
    if (!this.isDev) return;

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
}
