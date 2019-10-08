<template>
  <div class="n-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NContent',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .n-content {
    flex-grow: 1;
  }
</style>
