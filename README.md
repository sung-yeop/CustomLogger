# Custom Logger

A lightweight development logging utility for TypeScript/JavaScript projects.

## Features

- Development-only logging (automatically disabled in production)
- Automatic caller file location detection
- Level-based logging (INFO, WARN, ERROR)
- TypeScript support
- Easy to integrate

## Installation

```bash
npm install @sung-yeop/custom-logger
```

## Usage

```typescript
import { Logger } from "@sung-yeop/custom-logger";

// Basic usage (defaults to INFO level)
Logger.log("Hello World");

// With log levels
Logger.log("Information message", "INFO");
Logger.log("Warning message", "WARN");
Logger.log("Error message", "ERROR");
```

## Log Levels

- `INFO`: General information (uses console.log)
- `WARN`: Warning messages (uses console.warn)
- `ERROR`: Error messages (uses console.error)

## Environment

Logging is automatically disabled when `NODE_ENV !== "development"`. This ensures no logs appear in production builds.

## Output Format

```
==============================
1. 파일 위치: util/Logger.util.ts
------------------------------
2. Message : Your message here
------------------------------
3. TimeStamp : 2025-07-21T14:02:26.035Z
==============================
```

## TypeScript Support

```typescript
import { Logger, LogLevelType } from "@sung-yeop/custom-logger";

const level: LogLevelType = "INFO";
Logger.log("TypeScript message", level);
```

## License

MIT
