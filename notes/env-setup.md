在 MacBook 上搭建一个 `Node.js` 项目，通常需要配置以下几个环境和工具：

### Homebrew

Homebrew 是 macOS 上的一款软件包管理工具，方便安装各种开发工具。

检测 Homebrew 是否安装成功：
```shell
brew -v # 检测 Homebrew 版本/是否安装成功
brew doctor # 检测 Homebrew 是否安装正确
brew update # 更新 Homebrew 自己
brew upgrade # 升级所有通过 Homebrew 安装的软件
brew cleanup # 清理 Homebrew 的旧版本软件
brew list # 查看通过 Homebrew 安装的软件列表
```

## JavaScript

对于使用 `JavaScript` 的项目开发，在 `Node.js` 项目中，在安装 `Node.js` 时，已经包含了所需的 `JavaScript` 运行环境。

通常情况下，在电脑上配置开发环境时，仅需要安装 `Node.js` 和 `npm` 即可，不需要额外配置 `JavaScript` 的版本。

### Node.js & npm

`Node.js` 是一个 `JavaScript` 运行时环境，可以用于开发服务器端应用程序。用于在本地开发和运行 `Node.js / JavaScript` 项目。

`npm` 是 `Node.js` 的包管理工具，用于安装和管理 `JavaScript` 项目的依赖。

```shell
brew install node # 安装 Node.js 和 npm
node -v # 检查 Node.js 版本
npm -v # 检查 npm 版本
```

### nvm

`nvm` 是 Node.js 的版本管理工具 `Node Version Manager`，可以方便地切换不同版本的 Node.js。

```shell
nvm --version # 检查 nvm 版本
nvm install node # 安装最新版本的 Node.js
nvm list # 查看已安装的 Node.js 版本
nvm ls
nvm use <version> # 使用指定版本的 Node.js
nvm alias default <version> # 设置默认 Node.js 版本
nvm current # 查看当前使用的 Node.js 版本
nvm uninstall <version> # 卸载指定版本的 Node.js
```

## Firebase

本项目使用 `Firebase` 作为后端数据库，需要安装 `Firebase CLI`。并设置 `Firebase Functions` 和 `Firestore`。

### Firebase CLI

1. 安装 Firebase CLI
```shell
npm install -g firebase-tools
firebase --version # 检查 Firebase CLI 版本
```

2. 登录 Firebase
```shell
firebase login
```

3. 设置 Firebase Firestore
```shell
firebase init firestore
```

## Firebase Project

1. 创建 Firebase 项目

访问 Firebase 控制台：https://console.firebase.google.com/ ，创建一个新的 Firebase 项目。

2. 创建新项目

```shell
Add project
```

输入项目名称，选择国家/地区，点击 `Continue`，按照提示创建项目。

3. 在 Web 应用程序中添加 Firebase

在项目设置中，点击 `Web` 图标，添加 Firebase 到 Web 应用程序。

4. 在项目中初始化 Firebase

在项目目录中，运行命令 `firebase init` 初始化 Firebase。对于本项目，选择 `Firestore` 和 `Hosting`。

## Firebase Functions
1. 将项目部署到 Firebase 上，包括 `Firestore` 和 `Functions`，此处如果我们只想部署 `Functions`，可以使用以下命令：
```shell
firebase deploy --only functions
```

2. 如果发生错误，我们可以删除掉已经部署的 `Functions`
```shell
delete addMessage --region=us-central1
```

## Firebase Database

在 Firebase 后端我们需要创建影响的数据库来存储数据。

在这个项目中，我们有一个 `addMessage` 函数，用于将数据添加到数据库中。相应的，在数据库中我们创建一个名为 `messages` 的 `collection`，用于存储数据。