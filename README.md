# Nono-ui
Vue 组件库

[![Build Status](https://travis-ci.org/SOALIN228/Nono.svg?branch=master)](https://travis-ci.org/SOALIN228/Nono)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，如果你觉得有用，请点star

## 文档

官网： https://soalin228.github.io/Nono/

## 联系方式

SOALIN228@163.com

## 学习笔记

### 组件

`icon`

1. 使用`SVG` 图标
2. 接收在调用处传递的参数，显示不同的图标
3. ` `` ` 一定要写在`""` 中，不然打包可能会有坑

`button`

1. 使用`slot` 进行值的传递
2. 使用`icon` 插入图标
3. 使用`animation` 实现`loading` 动画
4. 元素对齐使用`vertical-align: middle;`
5. 使用`flex` 布局，通过`order` 属性控制图标显示位置
6. 在组件上监听事件，会默认进入组件内部，需要在组件中使用`@click="$emit('click')"` 将事件再传递出去

`button-group`

1.  使用`slot`  插入`button` 实现按钮组
2.  元素对齐使用`vertical-align: middle;`
3.  使用结构选择器`:first-child` 设置元素圆角
4.  `:hover` 时添加`z-index` 实现凸起
5.  使用`:not(:first-child)` 控制`margin-left` 解决边框重叠

`input`

1. 传入`error` 属性来进行文字的提示，使用`template` 包成一个整体
2. 在组件上直接写`disabled` 相当于`:disabled=true`
3. `v-model` 通过`@input="$emit('input', $event.target.value)"` 、`:value="value"` 实现

`row`

1. 设置间隔，需要在父组件上设置marginLeft 和marginRight 负x px，在col 上设置paddingLeft 和paddingRight x px，就可以实现间隔问题

2. vue 生命周期在父子组件中是父create，子create，子mounted，父mounted，这样在row 的mounted中就可以将gutter 传给col

   ```js
   mounted () {
     this.$children.forEach((vm) => {
     	vm.gutter = this.gutter
     })
   }
   ```

`col`

1. span="8" 传递的是字符串8，要使用bind 设置为数字，在props 接收String和Number两种类型
2. 使用scss 的函数做1 - 24 的栅格布局，不用写24个class
3. @media 从小尺寸写到大尺寸，因为下面的class 比前面的class 优先级高，这样大尺寸可以覆盖小尺寸

### 测试

**测试**

`npm i -D chai chai-spies`

**自动化测试**

`npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies`

创建`karma.conf.js`

在`test` 文件夹下为每个组件写单元测试`xxx.test.js`

Karma 是一个测试运行器，它可以呼起浏览器，加载测试脚本，然后运行测试用例，它需要`mocha`和`sinon-chai` ,引入`mocha` 可以使用`describe` 和 `it`, 引入`sinon` 可以使用`sinon.fake()` ，引入`chai` 可以使用`expect` ,使用`sinon-chai` 可以引入`sinon` 和`chai` 并使其可以混合使用

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
