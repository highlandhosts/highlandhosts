# highlandhosts API

## Installation

```bash
# Install dependencies
pnpm install

# Create environment file
cp .env.example .env

# Edit environment variables in .env
```

## Development

```bash
# Run in development mode
pnpm --filter=highland-hosts-api start:dev

# Run with hot-reload
pnpm --filter=highland-hosts-api start:debug

```

## Build

```bash
# Build application
pnpm --filter=highland-hosts-api build

# Run in production mode
pnpm --filter=highland-hosts-api start:prod
```

## Testing

```bash
# Run unit tests
pnpm --filter=highland-hosts-api test

# Run e2e tests
pnpm --filter=highland-hosts-api test:e2e

# Check test coverage
pnpm --filter=highland-hosts-api test:cov
```
