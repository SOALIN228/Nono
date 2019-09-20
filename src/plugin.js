import Toast from './toast'

let currentToast

export default {
  install (Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({ Vue, message, propsData: toastOptions })
    }
  }
}

function createToast ({ Vue, message, propsData }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message] // 将内容传入插槽中
  toast.$mount()  // 手动开启编译
  document.body.appendChild(toast.$el) // 挂载到页面
  return toast
}
