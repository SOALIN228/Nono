<template>
  <div>
    <n-input value="禁用" disabled></n-input>
    <n-input value="禁用" readonly></n-input>
  </div>
</template>

<script>
import Input from '../../../src/components/Input/input'

export default {
  name: 'input-disabled-demos',
  components: {
    'n-input': Input
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
