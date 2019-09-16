import Vue from 'vue'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
  el: '#app',
  data () {
    return {
      loading: true
    }
  },
  methods: {
    inputChange (e) {
      console.log(e)
    }
  }
})
