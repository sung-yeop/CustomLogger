import { LogProps } from "../types/Logger.type";

export class Logger {
  private static isDev = process.env.NODE_ENV === "development";

  private static getCallerInfo() {
    const stack = new Error().stack; // 스택 추적
    console.log("stack : ", stack);
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

  static log({ message, logLevel }: LogProps) {
    const timestamp = new Date().toISOString();
    const callerInfo = Logger.getCallerInfo();

    if (logLevel === "INFO") {
      console.log("==============================");
      console.log("1. 파일 위치: ", callerInfo?.fileLocation);
      console.log("------------------------------");
      console.log("2. Message : ", message);
      console.log("------------------------------");
      console.log("3. TimeStamp : ", timestamp);
      console.log("==============================");
    }
  }
}
