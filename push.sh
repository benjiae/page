#! /usr/bin/env bash

npm run build
rsync -ogvr --chown benja:benja dist/ vps:/var/www/sillydomain.name/
