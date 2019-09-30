<template>
  <div>
    <n-input value="错误" error="请输入正确的内容"></n-input>
  </div>
</template>

<script>
import Input from '../../../src/components/Input/input'

export default {
  name: 'input-error-demos',
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
