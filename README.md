
<div align="center">
    <img src="./static/logo.png" alt="logo" style='border-radius: 10px'><br>
    <img alt="Static Badge" src="https://img.shields.io/badge/writer-nonfan-yellow">
    <img alt="Static Badge" src="https://img.shields.io/github/license/nonfan/javascript-docs">
</div>


## 克隆项目

```bash
git clone https://github.com/nonfan/javascript-docs.git

cd javascript-docs
```

## 项目环境

确保项目安装 `nvm` 控制 node 版本工具。

## 安装依赖

### 自动化

通过执行 `install.sh` 文件自动化安装依赖。

```bash
./install.sh

# 如果安装过程中需要管理员权限，你可以使用以下命令：
sudo bash install.sh
```


### 手动化

通过`nvm`安装或切换到项目适配的`node`环境。

```bash
nvm use 18.20.2

# 不存在先下载
nvm install 18.20.2
```

安装好环境，进行安装依赖

```bash
npm install
```

### 运行

```bash
npm run start
```
