import { useEffect, useRef } from "react";
import { LogLevelType } from "../types/Logger.type";

/**
 * Custom hook to log component render count for debugging purposes
 * @param componentName - Name of the component being tracked
 * @param logLevel - Log level for the render count message, defaults to INFO
 */
export const useRenderCountLogger = (
  componentName: string,
  logLevel: LogLevelType = "info"
) => {
  const countRef = useRef<number>(0);

  useEffect(() => {
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
