#!/usr/bin/env bash
set -exuo pipefail

rm -rf dist || true
npm run build
rm -rf ../dist ../public || true
mv dist public ..
cp vercel.json ..

git switch dist
git reset --hard $(git rh)

rm -rf dist public || true
mv ../dist ../public ../vercel.json .
git add dist public vercel.json

git status
git commit -m 'dist'
git push -f

git switch dev-solidjs
