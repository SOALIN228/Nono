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

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const expect = chai.expect

// 单元测试

// 测试button图标
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: { // 传参
      icon: 'settings'
    }
  })
  vm.$mount() // 挂载
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings') // 断言属性为 #i-settings
  vm.$el.remove() // 移除button
  vm.$destroy() // 删除button对象
}

// 测试button loading
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove() // 移除button
  vm.$destroy() // 删除button对象
}

// 测试button 位置
{ // 测试左侧位置
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove() // 移除button
  vm.$destroy() // 删除button对象
}

{ // 测试右侧位置
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove() // 移除button
  vm.$destroy() // 删除button对象
}

// 测试button 点击事件
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()

  let spy = chai.spy(function () { // mock 函数
  })
  vm.$on('click', spy) // 监听函数

  let button = vm.$el
  button.click() // 触发button 点击
  expect(spy).to.have.been.called() // 断言button 被点击
  vm.$el.remove() // 移除button
  vm.$destroy() // 删除button对象
}
