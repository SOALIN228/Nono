import Vue from 'vue'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)


new Vue({
  el: '#app',
  data () {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: 'hi'
    }
  },
  methods: {
    showToast(){
      this.$toast('我是', {
        closeButton: {
          text: '知道了',
          callback (toast) {
            toast.log()
            console.log('xx说知道了')
          }
        },
        enableHtml: false
      })
    }
  }
})
