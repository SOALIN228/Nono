<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NTabsBody',
  inject: ['eventBus'],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .tabs-body {
  }
</style>
