#!/usr/bin/env bash

npm install

node --version
npm --version

exec /service/wait-for-it.sh \
  --strict \
  --timeout=$SERVICE_CONNECTION_TIMEOUT \
  $POSTGRES_HOST:$POSTGRES_PORT \
  -- \
    npm run dev $API_SERVICE_NAME
