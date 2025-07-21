import { LogProps } from "../types/Logger.type";

export class Logger {
  private static isDev = process.env.NODE_ENV === "development";

  private static getCallerInfo() {
    const stack = new Error().stack;
    if (!stack) return null;
    const caller = stack.split("\n");
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

  static log({ message, logLevel = "INFO" }: LogProps) {
    if (!this.isDev) return;

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
