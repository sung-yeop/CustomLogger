export type LogLevelType = "WARN" | "ERROR" | "INFO";

export type LogProps = LogLevelType & {
  message: any;
};
