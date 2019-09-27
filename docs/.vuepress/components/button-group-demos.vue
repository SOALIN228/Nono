<template>
  <div>
    <n-button-group>
      <n-button icon="left">L</n-button>
      <n-button icon="right" iconPosition="right">R</n-button>
    </n-button-group>
    <n-button-group>
      <n-button>L</n-button>
      <n-button>M</n-button>
      <n-button>R</n-button>
    </n-button-group>
  </div>
</template>

<script>
import Button from '../../../src/Button/button'
import ButtonGroup from '../../../src/ButtonGroup/button-group'

export default {
  name: 'button-group-demos',
  components: {
    'n-button': Button,
    'n-button-group': ButtonGroup
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
