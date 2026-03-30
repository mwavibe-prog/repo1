#!/bin/bash
PORT="${PORT:-3000}"
exec python3 -m http.server "$PORT"
