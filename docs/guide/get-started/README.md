---
title: 快速上手
---

# 快速上手

## 引入 Nono

```javascript
import Vue from 'vue'
import {Button} from 'nono-ui'
import App from './App'
import 'nono-ui/dist/index.css'
Vue.config.productionTip = false

Vue.use(Button)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

