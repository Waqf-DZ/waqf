#!/bin/bash

tar czf wakf.tar.gz package.json package-lock.json index.js domain infrastructure use-cases
scp wakf.tar.gz 167.99.210.127:~
rm wakf.tar.gz

ssh 167.99.210.127 << 'ENDSSH'
pm2 stop wakf
rm -rf wakf
mkdir wakf
tar xf wakf.tar.gz -C wakf
rm wakf.tar.gz
cd wakf
npm install
pm2 start wakf

ENDSSH