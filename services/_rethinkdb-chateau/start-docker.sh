#!/usr/bin/env bash
exec /service/common/wait-for-it.sh --strict --timeout=$SERVICE_CONNECTION_TIMEOUT $RETHINKDB_HOST:$RETHINKDB_PORT -- chateau -f ./config.js
