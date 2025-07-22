# Custom Logger

A lightweight development logging utility for TypeScript/JavaScript projects with React hooks support.

## Features

- Development-only logging (automatically disabled in production)
- Automatic caller file location detection
- Level-based logging (info, warn, error, debug)
- TypeScript support
- React hooks for component render tracking
- Conditional logging
- Easy to integrate

## Installation

```bash
npm install @sung-yeop/custom-logger
```

## Basic Usage

```typescript
import { Logger } from "@sung-yeop/custom-logger";

// Basic usage (defaults to info level)
Logger.log("Hello World");

// With log levels
Logger.log("Information message", "info");
Logger.log("Warning message", "warn");
Logger.log("Error message", "error");
Logger.log("Debug message", "debug");
```

## React Hook Usage

```typescript
import { useRenderCountLogger } from "@sung-yeop/custom-logger";

function MyComponent() {
  // Track render count for this component
  useRenderCountLogger("MyComponent");

  return <div>Hello World</div>;
}

// With custom log level
function AnotherComponent() {
  useRenderCountLogger("AnotherComponent", "warn");
  return <div>Another Component</div>;
}
```

## Conditional Logging

```typescript
import { Logger } from "@sung-yeop/custom-logger";

const isError = true;
Logger.when({
  condition: isError,
  message: "An error occurred!",
  logLevel: "error",
});
```

## Log Levels

- `info`: General information (uses console.info)
- `warn`: Warning messages (uses console.warn)
- `error`: Error messages (uses console.error)
- `debug`: Debug messages (uses console.debug)

## Environment

Logging is automatically disabled when `NODE_ENV !== "development"`. This ensures no logs appear in production builds.

## Output Format

### Basic Logger

```
==============================
1. 파일 위치 : src/components/MyComponent.tsx
2. Message : Your message here
3. 로깅 시각 : 14:02:26
==============================
```

### Render Count Logger

```
==============================
1. 컴포넌트 이름 : MyComponent
2. 렌더링 횟수 : 3
3. TimeStamp : 14:02:26
==============================
```

## TypeScript Support

```typescript
import {
  Logger,
  LogLevelType,
  useRenderCountLogger,
} from "@sung-yeop/custom-logger";

const level: LogLevelType = "info";
Logger.log("TypeScript message", level);

// In React component
function TypedComponent() {
  useRenderCountLogger("TypedComponent", "debug");
  return <div>Typed Component</div>;
}
```

## License

MIT
