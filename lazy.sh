#!/bin/bash
###### bot start/stop script using forever######
case "$1" in
start)
    forever start -e logs/err.out -o logs/out.out a3-discord-evt.js a3-discord-evt.js
;;
stop)
    forever stop a3-discord-evt.js
;;
restart)
    forever stop a3-discord-evt.js
    forever start -e logs/err.out -o logs/out.out a3-discord-evt.js a3-discord-evt.js
;;
*)
    echo "Usage: {start|stop|restart}" >&2
    exit 1
;;
esac
exit 0
