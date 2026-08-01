#! /usr/bin/env bash

rm -r dist
npm run build
rsync -ogvr --chown benja:benja dist/ vps:/srv/www/sillydomain.name/
