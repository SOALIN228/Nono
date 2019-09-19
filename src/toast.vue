<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'NToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default () { // 因为对象类型是引用，所以需要返回一个方法，相当于返回一个new 的对象
        return {
          text: '关闭',
          callback: undefined
        }
      }
    }
  },
  data () {
    return {}
  },
  mounted () {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  },
  methods: {
    close () {
      this.$el.remove()
      this.$destroy()
    },
    log () { // 给外部调用做测试
      console.log('测试')
    },
    onClickClose () {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this) // this === toast 实例，这样可以在外部调用组件内的方法
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: $font-size;
    height: $toast-height;
    line-height: 1.8;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    padding: 0 16px;
  }

  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }

  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
</style>
