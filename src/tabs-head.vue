<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: 'NTabsHead',
  inject: ['eventBus'],
  data () {
    return {}
  },
  created () {
    console.log(this.eventBus)
  }
}
</script>

<style lang="scss" scoped>
  .tabs-head {

  }
</style>
