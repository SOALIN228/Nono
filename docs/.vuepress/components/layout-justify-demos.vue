<template>
  <div>
    <n-row type="flex" class="row-bg">
      <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
      <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
      <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
    </n-row>
    <n-row type="flex" class="row-bg" justify="center">
      <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
      <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
      <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
    </n-row>
    <n-row type="flex" class="row-bg" justify="end">
      <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
      <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
      <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
    </n-row>
    <n-row type="flex" class="row-bg" justify="space-between">
      <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
      <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
      <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
    </n-row>
    <n-row type="flex" class="row-bg" justify="space-around">
      <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
      <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
      <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
    </n-row>
  </div>
</template>

<script>
import Row from '../../../src/components/Row/row'
import Col from '../../../src/components/Col/col'

export default {
  name: 'layout-justify-demos',
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
  .n-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .n-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
