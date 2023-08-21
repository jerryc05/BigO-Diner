#!/usr/bin/env bash
set -exuo pipefail


npm run build
mv dist ..
cp vercel.json ..

git switch dist
mv ../dist .
cp ../vercel.json .

git reset --hard $(git rh)
git commit -m 'dist'
git push
