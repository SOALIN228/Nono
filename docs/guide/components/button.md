---
title: Button
---
# 按钮

## 组件注册
```js
import { Button } from 'nono-ui';
Vue.use(Button);
```

## 代码演示

**按钮**

<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

```html
<n-button>默认按钮</n-button>

<n-button icon="settings">图标按钮</n-button>

<n-button :loading="true">loading按钮</n-button>
```

**按钮组**

<ClientOnly>
<button-group-demos></button-group-demos>
</ClientOnly>

```html
<n-button-group>
  <n-button icon="left">L</n-button>
  <n-button icon="right" iconPosition="right">R</n-button>
</n-button-group>

<n-button-group>
  <n-button>L</n-button>
  <n-button>M</n-button>
  <n-button>R</n-button>
</n-button-group>
```
