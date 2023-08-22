#!/usr/bin/env bash
set -exuo pipefail

rm -rf dist || true
npm run build
mv dist ..
cp vercel.json ..

git switch dist
git reset --hard $(git rh)

rm -rf dist
mv ../dist .
mv ../vercel.json .
git add dist

git commit -m 'dist'
git push

git switch dev-solidjs
