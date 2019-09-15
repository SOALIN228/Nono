<template>
  <svg class="icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg'

export default {
  name: 'NIcon',
  props: ['name'],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
  }
</style>
