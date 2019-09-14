import Vue from 'vue'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data () {
    return {
      loading: true
    }
  }
})
