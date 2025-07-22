export type LogLevelType = "warn" | "error" | "info" | "debug";
export type ConditionalLogType = {
  condition: boolean;
  message: any;
  logLevel: LogLevelType;
};
