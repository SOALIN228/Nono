<template>
  <div>
    <n-row :gutter="10">
      <n-col :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
        <div class="grid-content bg-purple"></div>
      </n-col>
      <n-col :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
        <div class="grid-content bg-purple-light"></div>
      </n-col>
      <n-col :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
        <div class="grid-content bg-purple"></div>
      </n-col>
      <n-col :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
        <div class="grid-content bg-purple-light"></div>
      </n-col>
    </n-row>
  </div>
</template>

<script>
import Row from '../../../src/components/Row/row'
import Col from '../../../src/components/Col/col'

export default {
  name: 'layout-responsive-demos',
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
  * {
    box-sizing: border-box;
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
</style>
