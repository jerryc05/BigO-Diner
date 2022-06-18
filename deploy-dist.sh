#!/usr/bin/env sh

set -Eeuo pipefail

# git clone git@github.com:jerryc05/BigO-Diner.git --single-branch -b dist ../BigO-Diner-dist

cd $(pwd)/$(dirname $0)
ROOT_DIR=${1:-../BigO-Diner-dist}
[ -d $ROOT_DIR ]||{ echo "ERR: [$ROOT_DIR] not found!" && false;}
npm run b
rm -r $ROOT_DIR/dist || true
mv dist $ROOT_DIR
cd $ROOT_DIR
git add .
git c --amend --no-edit
git --no-pager log
