#!/bin/bash

PROJECT_DIR="/home/nara/speller-front"

cd $PROJECT_DIR || exit

git pull origin main

pnpm install

pnpm run build

pm2 restart speller-front || pm2 start npm --name "speller-front" -- run start