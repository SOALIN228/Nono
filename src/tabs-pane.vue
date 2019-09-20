<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NTabsPane',
  inject: ['eventBus'],
  data () {
    return {
      active: false
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      console.log(name)
      this.active = name === this.name
    })
  }
}
</script>

<style lang="scss" scoped>
  .tabs-pane {

  }
</style>
