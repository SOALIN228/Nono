<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'NPopover',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    positionContent () { // 将popover 显示在页面上并固定位置
      document.body.appendChild(this.$refs.contentWrapper)
      let { top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument (e) {
      if (this.$refs.popover &&
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target) || this.$refs.contentWrapper.contains(e.target))
      ) {
      } else { // 点击空白页面关闭popover
        this.close()
      }
    },
    open () {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close () {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick (event) {
      if (this.$refs.triggerWrapper.contains(event.target)) { // 点击元素在triggerWrapper 中
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .contentWrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>
