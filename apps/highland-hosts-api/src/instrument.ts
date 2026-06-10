import * as Sentry from '@sentry/nestjs';
Sentry.init({
  dsn: process.env.SKYE_GLAMPING_API_SENTRY_DSN,
  environment: process.env.HIGHLAND_HOSTS_ENVIRONMENT,
});
