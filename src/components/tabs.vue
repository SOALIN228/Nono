<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'NTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted () {
    this.checkChildren()
    this.selectTab()
  },
  methods: {
    checkChildren () {
      if (this.$children.length === 0) { // 子组件为空
        console && console.warn &&
        console.warn('tabs的子组件应该是tabs-head 和tabs-nav，但你没有写子组件')
      }
    },
    selectTab () { // 找出当前选中元素进行发布
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'NTabsHead') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'NTabsItem'
              && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>
