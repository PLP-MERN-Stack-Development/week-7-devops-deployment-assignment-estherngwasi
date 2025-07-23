# Monitoring & Health Checks

## Health Check Endpoint
- Backend: `/api/health` returns `{ status: 'ok' }`
- Use this endpoint for uptime monitoring (e.g., UptimeRobot, Render health checks)

## Error Tracking (Sentry)
- [Sentry](https://sentry.io/) can be integrated for error monitoring.
- Backend: Add Sentry SDK to `server/index.js` (see Sentry docs for Node.js/Express)
- Frontend: Add Sentry SDK to `client/src/index.js` (see Sentry docs for React)

## Performance Monitoring
- Use Render's built-in metrics for backend
- Use Vercel's analytics for frontend

---

**Remember:** Never expose secrets in logs or public dashboards. 