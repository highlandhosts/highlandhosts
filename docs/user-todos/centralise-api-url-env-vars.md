# Centralise API URL Environment Variables

## What changed

- Removed all `"https://api.highlandhosts.uk"` fallbacks from `process.env.NEXT_PUBLIC_API_URL`
- Created `getApiBaseUrl()` in `@repo/highland-hosts-api-client` — throws if `NEXT_PUBLIC_API_URL` is not set
- All `packages/auth` and `packages/highland-hosts-api-client` files now use `getApiBaseUrl()`
- Host app (`apps/highland-hosts-app`) now uses `EXPO_PUBLIC_API_URL` instead of `Constants.expoConfig.extra.apiUrl`

## Action required

### Next.js apps (highland-hosts-guest-website, highland-hosts-admin-website, skye-glamping-website)

Ensure `NEXT_PUBLIC_API_URL` is set in `.env.local` and production environment:

```
NEXT_PUBLIC_API_URL=https://api.highlandhosts.uk
```

### Host app (highland-hosts-app)

Create a `.env` file in `apps/highland-hosts-app/` with:

```
EXPO_PUBLIC_API_URL=https://api.highlandhosts.uk
```

Also set this in your EAS build profiles / environment.
