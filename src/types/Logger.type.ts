export interface LogLevelType {
  logLevel: "DEBUG" | "WARN" | "ERROR" | "INFO";
}

export type LogProps = LogLevelType & {
  message: any;
};
