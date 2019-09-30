<template>
  <n-row :gutter="10">
    <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  </n-row>
</template>

<script>
import Row from '../../../src/components/Row/row'
import Col from '../../../src/components/Col/col'

export default {
  name: 'layout-gutter-demos',
  components: {
    'n-row': Row,
    'n-col': Col
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  *{
    box-sizing: border-box;
  }
  .n-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .n-col {
    border-radius: 4px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
