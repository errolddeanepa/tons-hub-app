#!/bin/sh
set -e

echo "--- Starting Medusa server ---"
# Use exec to replace the shell with the node process so the container PID 1 is the app.
exec env \
	DATABASE_URL="$DATABASE_URL" \
	REDIS_URL="$REDIS_URL" \
	JWT_SECRET="$JWT_SECRET" \
	COOKIE_SECRET="$COOKIE_SECRET" \
	npm run start