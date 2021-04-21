<h1 align="center">JavaScript Microfrontends(前端微服务构建)</h1>

<p align="center">
  ![image](https://user-images.githubusercontent.com/19926113/115529590-9ced8180-a2c5-11eb-9fdd-10ba170eaa46.png)
</p>


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

### 项目配置

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
