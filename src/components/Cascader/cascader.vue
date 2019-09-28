<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <n-cascader-item :sourceItem="item"></n-cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from '../CascaderItem/cascader-item'

export default {
  name: 'NCascader',
  components: {
    'n-cascader-item': CascaderItem
  },
  props: {
    source: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
