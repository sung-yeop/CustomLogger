import { LogLevelType } from "../types/Logger.type";
/**
 * Custom Logger utility class for development logging
 */
export declare class Logger {
    private static isDev;
    /**
     * Get caller file information from stack trace
     * @returns Object containing file location or null if stack is unavailable
     */
    private static getCallerInfo;
    /**
     * Format and output log message with consistent styling
     * @param message - The message to log
     * @param method - Console method to use (warn, error, log)
     */
    private static logFormatting;
    /**
     * Main logging method with level-based output
     * @param message - The message to log
     * @param logLevel - Log level (INFO, WARN, ERROR), defaults to INFO
     */
    static log(message: any, logLevel?: LogLevelType): void;
}
//# sourceMappingURL=Logger.util.d.ts.map