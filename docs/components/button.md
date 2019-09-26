---
title: Button
---
# 按钮

使用方法

<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

```html
<n-button>默认按钮</n-button>

<n-button icon="settings">图标按钮</n-button>

<n-button :loading="true">loading按钮</n-button>
```
```js
import Button from '../../../src/button'

export default {
  components: {
    'n-button': Button
  }
}
```
