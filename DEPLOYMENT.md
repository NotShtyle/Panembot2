# Deploying to Kinsta (Application Hosting)

This project is a Node.js Express server with a Vite (React) client.

- Server entry: `server/index.ts` (bundled to `dist/index.js`)
- Client build output: `dist/public/`
- Health check: `GET /api/health`
- Port: the app listens on `process.env.PORT` (required by Kinsta)

## Prerequisites
- Code pushed to a Git provider (GitHub/GitLab/Bitbucket).
- Node 18–22 recommended.

## Kinsta App Setup
1. Create a new Application in Kinsta and connect your repository.
2. Select the branch to deploy.
3. Configure build and start commands:
   - Build command:
     ```bash
     npm run build
     ```
   - Start command:
     ```bash
     npm start
     ```
4. Runtime environment:
   - Select Node.js 20 (or compatible with `"engines"` in `package.json`).
   - No custom port necessary; Kinsta sets `PORT` automatically.
5. (Optional) Health check path:
   - `/api/health`

## Environment Variables
Currently, none are required. If you add services (DB, APIs), define variables in Kinsta > Environment variables.

## Local Development
- Dev: `npm run dev` (uses `cross-env` for Windows/macOS/Linux)
- Build: `npm run build`
- Prod locally: `npm start` (after build)

## Notes
- Production serving uses `serveStatic()` from `server/vite.ts`, which serves the prebuilt client from `dist/public` and falls back to `index.html` for SPA routes.
- The server logs include a timestamped prefix and will print `serving on port <PORT>` when ready.
