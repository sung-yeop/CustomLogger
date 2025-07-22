import { useEffect, useRef } from "react";
import { LogLevelType } from "../types/Logger.type";
import { Logger } from "../util/Logger.util";

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
