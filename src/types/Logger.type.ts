export type LogLevelType = "WARN" | "ERROR" | "INFO";
export type ConditionalLogType = {
  condition: boolean;
  message: any;
  logLevel: LogLevelType;
};
