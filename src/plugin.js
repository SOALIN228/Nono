import Toast from './toast'

export default {
  install (Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: toastOptions
      })
      toast.$slots.default = [message] // 将内容传入插槽中
      toast.$mount() // 手动开启编译
      document.body.appendChild(toast.$el) // 挂载到页面
    }
  }
}
