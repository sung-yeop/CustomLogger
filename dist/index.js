'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

/**
 * Custom Logger utility class for development logging
 */
class Logger {
    /**
     * Get caller file information from stack trace
     * @returns Object containing file location or null if stack is unavailable
     */
    static getCallerInfo() {
        const stack = new Error().stack;
        if (!stack)
            return null;
        const caller = stack.split("\n");
        let targetCaller = caller[3];
        for (let i = 3; i < caller.length; i++) {
            const line = caller[i];
            if (!line.includes("Logger.util") &&
                !line.includes("dist/index") &&
                !line.includes("node_modules") &&
                !line.includes("react-dom") &&
                !line.includes("scheduler") &&
                !line.includes("useRenderCountLogger") &&
                !line.includes("webpack") &&
                !line.includes("cjs/") &&
                !line.includes("esm/") &&
                !line.includes("react_devtools") &&
                !line.includes("development.js") &&
                !line.includes("react-refresh") &&
                line.includes("/") &&
                (line.includes(".tsx") ||
                    line.includes(".ts") ||
                    line.includes(".jsx") ||
                    line.includes(".js"))) {
                targetCaller = caller[i];
                break;
            }
        }
        const parserLineArr = targetCaller.replace(/:\d+:\d+\)/, "").split("/");
        const fileLocation = parserLineArr.length > 2
            ? parserLineArr[parserLineArr.length - 2].concat("/", parserLineArr[parserLineArr.length - 1])
            : parserLineArr[parserLineArr.length - 1];
        return {
            fileLocation,
        };
    }
    /**
     * Validates if logging is enabled based on environment
     * Only allows logging in development environment
     * @returns Early return if not in development mode
     */
    static validateEnv() {
        if (!this.isDev)
            return;
    }
    /**
     * Main logging method with level-based output
     * @param message - The message to log
     * @param logLevel - Log level (INFO, WARN, ERROR), defaults to INFO
     */
    static log(message, logLevel = "info") {
        Logger.validateEnv();
        const timestamp = new Date().toLocaleTimeString();
        const callerInfo = Logger.getCallerInfo();
        console[logLevel]("==============================");
        console[logLevel]("1. 파일 위치: ", callerInfo?.fileLocation);
        console[logLevel]("2. Message : ", message);
        console[logLevel]("3. 로깅 시각 : ", timestamp);
        console[logLevel]("==============================");
    }
    /**
     * Conditional logging method - only logs when condition is true
     * @param condition - Boolean condition to check before logging
     * @param message - The message to log if condition is true
     * @param logLevel - Log level (INFO, WARN, ERROR), defaults to INFO
     */
    static when({ condition, message, logLevel = "info" }) {
        Logger.validateEnv();
        if (!condition)
            return;
        Logger.log(message, logLevel);
    }
}
// Only enable logging in development environment
Logger.isDev = process.env.NODE_ENV === "development";

/**
 * Custom hook to log component render count for debugging purposes
 * @param componentName - Name of the component being tracked
 * @param logLevel - Log level for the render count message, defaults to INFO
 */
const useRenderCountLogger = (componentName, logLevel = "info") => {
    const countRef = react.useRef(0);
    react.useEffect(() => {
        countRef.current++;
        const timestamp = new Date().toLocaleTimeString();
        console[logLevel]("==============================");
        console[logLevel](`1. 컴포넌트 이름: ${componentName}`);
        console[logLevel]("------------------------------");
        console[logLevel](`2. 렌더링 횟수 - ${countRef.current}`);
        console[logLevel]("------------------------------");
        console[logLevel](`3. TimeStamp: ${timestamp}`);
        console[logLevel]("==============================");
    });
};

exports.Logger = Logger;
exports.default = Logger;
exports.useRenderCountLogger = useRenderCountLogger;
//# sourceMappingURL=index.js.map
