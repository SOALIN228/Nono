---
title: Layout
---
# Layout 布局 

## 组件注册
```js
import { Row } from 'nono-ui';
import { Col } from 'nono-ui';
Vue.use(Row);
Vue.use(Col);
```

## 代码演示

**基础布局**

<ClientOnly>
  <layout-base-demos></layout-base-demos>
</ClientOnly>

```html
<n-row>
  <n-col :span="24"><div class="grid-content bg-purple-dark"></div></n-col>
</n-row>
<n-row>
  <n-col :span="12"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="12"><div class="grid-content bg-purple-light"></div></n-col>
</n-row>
<n-row>
  <n-col :span="8"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="8"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="8"><div class="grid-content bg-purple"></div></n-col>
</n-row>
<n-row>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
</n-row>
<n-row>
  <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="4"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="4"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="4"><div class="grid-content bg-purple-light"></div></n-col>
</n-row>

<style lang="scss" scoped>
  .n-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .n-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```

**分栏间隔**

<ClientOnly>
  <layout-gutter-demos></layout-gutter-demos>
</ClientOnly>

```html
<n-row :gutter="10">
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
</n-row>

<style lang="scss" scoped>
  .n-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .n-col {
    border-radius: 4px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```

**分栏偏移**

<ClientOnly>
  <layout-offset-demos></layout-offset-demos>
</ClientOnly>

```html
<n-row :gutter="20">
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></n-col>
</n-row>
<n-row :gutter="20">
  <n-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></n-col>
</n-row>
<n-row :gutter="20">
  <n-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></n-col>
</n-row>

<style lang="scss" scoped>
  .n-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .n-col {
    border-radius: 4px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```

**对齐方式**

<ClientOnly>
  <layout-justify-demos></layout-justify-demos>
</ClientOnly>

```html
<n-row type="flex" class="row-bg">
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
</n-row>
<n-row type="flex" class="row-bg" justify="center">
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
</n-row>
<n-row type="flex" class="row-bg" justify="end">
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
</n-row>
<n-row type="flex" class="row-bg" justify="space-between">
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
</n-row>
<n-row type="flex" class="row-bg" justify="space-around">
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
</n-row>

<style lang="scss" scoped>
  .n-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .n-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

**响应式布局**

<ClientOnly>
  <layout-responsive-demos></layout-responsive-demos>
</ClientOnly>

```html
<n-row :gutter="10">
  <n-col :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}"><div class="grid-content bg-purple"></div></n-col>
  <n-col :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}"><div class="grid-content bg-purple"></div></n-col>
  <n-col :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}"><div class="grid-content bg-purple-light"></div></n-col>
</n-row>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .n-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
