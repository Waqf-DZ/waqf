#!/bin/bash

ssh 167.99.210.127 << 'ENDSSH'
pm2 stop wakf
cd wakf
git checkout .
git pull origin main
npm install
pm2 start wakf

ENDSSH