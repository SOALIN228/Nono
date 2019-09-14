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

## 提问

## 变更记录

## 联系方式

## 贡献代码


