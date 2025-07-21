export interface LogLevelType {
  logLevel?: "WARN" | "ERROR" | "INFO";
}

export type LogProps = LogLevelType & {
  message: any;
};
