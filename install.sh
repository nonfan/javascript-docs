#!/bin/bash

source ~/.nvm/nvm.sh

# 确保 nvm 已安装并可用
if [ -n "$(command -v nvm)" ]; then
    echo "NVM 已安装"
else
    echo "NVM 未安装，请先安装 NVM"
    exit 1
fi

# 加载 nvm
source ~/.nvm/nvm.sh

# 读取 .nvmrc 文件中的版本
if [ -f .nvmrc ] && [ -r .nvmrc ]; then
    NODE_VERSION=$(cat .nvmrc)
    echo "使用 Node.js 版本 $NODE_VERSION"
else
    echo ".nvmrc 文件不存在或不可读"
    exit 1
fi

# 安装并使用指定的 Node.js 版本
nvm install $NODE_VERSION
nvm use $NODE_VERSION

# 安装项目依赖
npm install
