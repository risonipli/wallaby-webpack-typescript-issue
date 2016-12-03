#!/usr/bin/env bash

rm -rf node_modules/u-workflow.utils
ln -svf `pwd`/packages/utils/ `pwd`/node_modules/
mv node_modules/utils node_modules/u-workflow.utils
