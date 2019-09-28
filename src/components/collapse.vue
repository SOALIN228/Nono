<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'NCollapse',
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    if (this.single) {
      return {
        eventBus: this.eventBus
      }
    } else {
      return {
        eventBus: this.eventBus
      }
    }
  },
  mounted () {
    this.eventBus.$emit('update:selected', this.selected) // 设置初始选择

    this.eventBus.$on('update:addSelected', (name) => { // 选中打开
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      this.eventBus.$emit('update:selected', selectedCopy) // 传递给item 内部
      this.$emit('update:selected', selectedCopy) // 将变化的selected 传递给调用组件者
    })

    this.eventBus.$on('update:removeSelected', (name) => { // 选中关闭
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index, 1)
      this.eventBus.$emit('update:selected', selectedCopy) // 传递给item 内部
      this.$emit('update:selected', selectedCopy) // 将变化的selected 传递给调用组件者
    })
  }
}
</script>

<style lang="scss" scoped>
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>
