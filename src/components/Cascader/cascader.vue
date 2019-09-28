<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible">
      <n-cascader-items :items="source"></n-cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from '../CascaderItems/cascader-items'

export default {
  name: 'NCascader',
  components: {
    'n-cascader-items': CascaderItems
  },
  props: {
    source: {
      type: Array
    }
  },
  data () {
    return {
      popoverVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .cascader {
    .trigger {
      border: 1px solid red;
      height: 32px;
      width: 100px;
    }

    .popover {
      border: 2px solid green;
      height: 200px;
      display: flex;

      .label {
        white-space: nowrap;
      }
    }
  }
</style>
