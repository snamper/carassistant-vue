#!/usr/bin/env bash

# 发布环境配置
PROJ_DIR="$WORKSPACE/"            # 发布工程目录
HOST=$1                           # 服务器IP
DEPLOY_DIR=$2                     # 发布生产目录
DEPLOY_ENV=$3                     # 当前发布环境
TEMP_DIR=${DEPLOY_DIR}"_temp"     # 发布临时目录
BACKUP_DIR=${DEPLOY_DIR}"_backup" # 备份目录
###############

cd "$PROJ_DIR"
cp -rf deploy_script/env/$DEPLOY_ENV/* src/
npm install --registry=http://registry.npm.taobao.org --phantomjs_cdnurl=http://cnpmjs.org/downloads

# clean build env
gulp clean
rm -f dist.tar.gz
gulp build

tar -czvf dist.tar.gz dist

ssh root@$HOST "mkdir -p $TEMP_DIR && cd $TEMP_DIR && pwd"
ssh root@$HOST "mkdir -p $DEPLOY_DIR && cd $DEPLOY_DIR && pwd"

ssh root@$HOST "rm -rf $TEMP_DIR/*"
scp $PROJ_DIR/dist.tar.gz root@$HOST:$TEMP_DIR/app.tar.gz
ssh root@$HOST "cd $TEMP_DIR && tar -zxvf app.tar.gz"

ssh root@$HOST "rm -rf $DEPLOY_DIR/* && cp -rf $TEMP_DIR/dist/* $DEPLOY_DIR/"
ssh root@$HOST "cd $DEPLOY_DIR && pwd && ls -al"