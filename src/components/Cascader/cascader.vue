<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <n-cascader-items :items="source"
                        :height="popoverHeight"
                        :selected="selected"
                        @update:selected="onUpdateSelected"
      ></n-cascader-items>
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
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      popoverVisible: false
    }
  },
  methods: {
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../var";

  .cascader {
    position: relative;

    .trigger {
      height: 32px;
      width: 100px;
      border: 1px solid black;
    }

    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      display: flex;
      @extend .box-shadow;
    }
  }
</style>
