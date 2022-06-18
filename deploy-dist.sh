#!/usr/bin/env sh

set -Eeuo pipefail

# git clone git@github.com:jerryc05/BigO-Diner.git --single-branch -b dist ../BigO-Diner-dist

cd $(pwd)/$(dirname $0)
[ -d ${1:=../BigO-Diner-dist} ]||{ echo "ERR: [$1] not found!" && false;}
npm run b
rm -r $1/dist || true
mv dist $1
cd $1
git c --amend
