<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)" :key="item.name">
        {{item.name}}
        <n-icon class="icon" v-if="item.children" name="right"></n-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <n-cascader-items :items="rightItems"
                        :height="height"
                        :level="level+1"
                        :selected="selected"
                        @update:selected="onUpdateSelected"
      ></n-cascader-items>
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
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems () {
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children
      } else {
        return null
      }
    }
  },
  methods: {
    onClickLabel (item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
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
