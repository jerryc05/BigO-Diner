#!/usr/bin/env bash
set -exuo pipefail

rm -rf dist || true
npm run build
rm -rf ../dist || true
mv dist ..
cp vercel.json ..

git switch dist
git reset --hard $(git rh)

rm -rf dist || true
mv ../dist ../vercel.json .
git add dist vercel.json

git status
git commit -m 'dist'
git push -f

git switch dev-solidjs
