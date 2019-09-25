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
      type: String,
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
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:selected', (name) => { // 将变化的selected 传递给外界
      this.$emit('update:selected', name)
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
