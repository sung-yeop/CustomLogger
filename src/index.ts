import { Logger } from "./util/Logger.util";
import { LogLevelType } from "./types/Logger.type";
import { useRenderCountLogger } from "./hooks/useRenderCountLogger";

export default Logger;
export { Logger, useRenderCountLogger };
export type { LogLevelType };
