<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item" :key="item.name">
        {{item.name}}
        <n-icon class="icon" v-if="item.children" name="right"></n-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <n-cascader-items :items="rightItems" :height="height"></n-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from '../Icon/icon'

export default {
  name: 'NCascaderItems',
  components: {
    'n-icon': Icon
  },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    }
  },
  data () {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems () {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../var";

  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    .left {
      height: 100%;
      padding: .3em 0;

      .label {
        padding: .3em 1em;
        display: flex;
        align-items: center;

        .icon {
          margin-left: 1em;
          transform: scale(0.6);
        }
      }
    }

    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
  }
</style>
