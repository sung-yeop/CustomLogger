import { useEffect, useRef } from "react";
import { LogLevelType } from "../types/Logger.type";
import { Logger } from "../util/Logger.util";

/**
 * Custom hook to log component render count for debugging purposes
 * @param componentName - Name of the component being tracked
 * @param logLevel - Log level for the render count message, defaults to INFO
 */
export const useRenderCountLogger = (
  componentName: string,
  logLevel: LogLevelType = "INFO"
) => {
  const countRef = useRef<number>(0);

  useEffect(() => {
    countRef.current++;
    Logger.log(`${componentName} 렌더링 횟수 - ${countRef.current}`, logLevel);
  });
};
