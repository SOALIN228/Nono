<template>
  <div>
    <n-button>默认按钮</n-button>
    <n-button icon="settings">图标按钮</n-button>
    <n-button :loading="true">loading按钮</n-button>
  </div>
</template>

<script>
import Button from '../../../src/components/Button/button'

export default {
  name: 'button-demos',
  components: {
    'n-button': Button
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
