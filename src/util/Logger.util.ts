import { fileURLToPath } from "url";
import { LogProps } from "../types/Logger.type";

const filePath = fileURLToPath(import.meta.url);

export class Logger {
  private static isDev = process.env.NODE_ENV === "development";
  static log({ message, logLevel }: LogProps) {
    const timestamp = new Date().toISOString();
    if (logLevel === "INFO") {
      console.log("==============================");
      console.log(
        "파일 위치 : ",
        filePath,
        "\n",
        "Message : ",
        message,
        "TimeStamp : ",
        timestamp
      );
    }
  }
}
