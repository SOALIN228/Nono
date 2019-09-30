---
title: Input
---
# 输入框

## 组件注册
```js
import { Input } from 'nono-ui';
Vue.use(Input);
```

## 代码演示

**基础用法**

<ClientOnly>
  <input-base-demos></input-base-demos>
</ClientOnly>

```haml
<n-input value="默认"></n-input>
```

**禁用状态**

<ClientOnly>
  <input-disabled-demos></input-disabled-demos>
</ClientOnly>

```haml
<n-input value="禁用" disabled></n-input>
<n-input value="禁用" readonly></n-input>
```

**错误状态**

<ClientOnly>
  <input-error-demos></input-error-demos>
</ClientOnly>

```haml
<n-input value="错误" error="请输入正确的内容"></n-input>
```
