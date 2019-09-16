# Nono-ui
Vue 组件库

[![Build Status](https://travis-ci.org/SOALIN228/Nono.svg?branch=master)](https://travis-ci.org/SOALIN228/Nono)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，如果你觉得有用，请点star

## 开始使用

### 安装
1. 使用本UI组件库前，请在css 中开启border-box
    ```css
    *,*::before,*::after{box-sizing: border-box;}
    ```

    IE 8 及以上浏览器都支持此样式

    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

    ```html
    :root {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
    ```

    IE 15 及以上浏览器都支持此样式

2. 安装

    ```bash
    npm install --save nono-ui
    ```

3. 引入

    ```javascript
    import {Button, ButtonGroup, Icon} from 'nono-ui'
    import 'nono-ui/dist/index.css'
    
    export default {
      name: 'app',
      components: {
        Button,
        ButtonGroup,
        Icon
      }
    }
    ```


## 文档

## 变更记录

## 联系方式

SOALIN228@163.com

## 学习笔记

### 组件

`button`

1. 使用`slot` 进行值的传递
2. 使用`icon` 插入图标
3. 使用`animation` 实现`loading` 动画
4. 元素对齐使用`vertical-align: middle;`
5. 使用`flex` 布局，通过`order` 属性控制图标显示位置
6. 在组件上监听事件，会默认进入组件内部，需要在组件中使用`@click="$emit('click')"` 将事件再传递出去

`Icon`

1. 使用`SVG` 图标
2. 接收在调用处传递的参数，显示不同的图标
3. ` `` ` 一定要写在`""` 中，不然打包可能会有坑

`button-group`

1.  使用`slot`  插入`button` 实现按钮组
2. 元素对齐使用`vertical-align: middle;`
3. 使用结构选择器`:first-child` 设置元素圆角
4. `:hover` 时添加`z-index` 实现凸起
5. 使用`:not(:first-child)` 控制`margin-left` 解决边框重叠



### 测试

**测试**

`npm i -D chai chai-spies`

**自动化测试**

`npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies`

创建`karma.conf.js`

在`test` 文件夹下为每个组件写单元测试`xxx.test.js`

**集成测试**

使用Travis CI，添加`.travis.yml` 文件，代码在每次提交时，会在`node` 不同版本上跑测试用例

```
// .travis.yml
language: node_js
node_js:
  - "8"
  - "9"
  - "10"
addons:
  chrome: stable
sudo: required
before_script:
  - "sudo chown root /opt/google/chrome/chrome-sandbox"
  - "sudo chmod 4755 /opt/google/chrome/chrome-sandbox"
```

### npm 发布

1. 将源从淘宝切回来
2. npm adduser 登录
3. 在packject.json 中修改版本信息，指定入口文件
4. npm publish 发布版本