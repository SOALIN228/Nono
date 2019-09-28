import Vue from 'vue'
import App from './App.vue'
import Icon from './components/Icon'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Input from './components/Input'
import Row from './components/Row'
import Col from './components/Col'

Vue.use(Icon)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
