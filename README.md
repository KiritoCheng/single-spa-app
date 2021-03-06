<h1 align="center">JavaScript Microfrontends(前端微服务构建)</h1>

<p align="center">
  <img src="https://user-images.githubusercontent.com/19926113/115855542-effa3c80-a45d-11eb-9f4d-56f0af7d27d4.png"/>
</p>

## Why use Microfrontends?

- Use multiple frameworks on the same page without page refreshing (React, AngularJS, Angular, Ember, or whatever you're using)
- Deploy your microfrontends independently
- Write code using a new framework, without rewriting your existing app
- Lazy load code for improved initial load time

## 我们为什么要使用微前端？

- 在同一页面上使用多个前端框架 而不用刷新页面 (React, AngularJS, Angular, Ember, 你正在使用的框架)
- 独立部署每一个单页面应用
- 新功能使用新框架，旧的单页应用不用重写可以共存
- 改善初始加载时间，懒惰加载代码

<hr>

## JavaScript Microfrontends

use single-spa for bringing together multiple JavaScript microfrontends in a frontend application.

### Multiple projects

- react(Simple project 1 built with React)
- vue(Simple project 1 built with Vue)
- angular(Simple project 1 built with Angular)

## Development Setup

### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]

### Project configuration

Create workspace:

```
git clone
cd single-sap-app
```

Install dependencies for React, Vue, Angular projects, and Webpack configurations:

```
npm install
```

Run the application:

```
npm start
```

Open running code at localhost:

- Render applications based on all frameworks: http://localhost:8080/
- Render react: http://localhost:8080/react/
- Render vue: http://localhost:8080/vue/
- Render angular: http://localhost:8080/angular/

<hr>

## 微前端框架架构

利用 single-spa 技术实现微前端，将多个单页面应用聚合为一个整体应用的 JavaScript 微前端框架。

### 项目结构

- react（使用 react 搭建的简单项目 1）
- vue（使用 Vue 搭建的简单项目 2）
- angular（使用 angular 搭建的简单项目 3）

## 安装步骤

### 依赖前提

- 安装 [Node.js] which includes [Node Package Manager][npm]

### 项目配置

下载工作区:

```
git clone
cd single-sap-app
```

安装 react,vue,angular 各自项目以及 webpack 配置相关依赖:

```
npm install
```

利用 webpack 运行微前端项目:

```
npm start
```

在浏览器中进行查看:

- 渲染基于所有框架的程序: http://localhost:8080/
- 只渲染 react: http://localhost:8080/react/
- 只渲染 vue: http://localhost:8080/vue/
- 只渲染 angular: http://localhost:8080/angular/
