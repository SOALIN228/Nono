<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)" :key="item.name">
        <span class="name">{{item.name}}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <n-icon class="loading" name="loading"></n-icon>
          </template>
          <template v-else>
            <n-icon class="next"
                    v-if="rightArrowVisible(item)"
                    name="right"
                    :loading-item="loadingItem"
                    :load-data="loadData"
            ></n-icon>
          </template>
        </span>
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
    loadingItem: {
      type: Object,
      default: () => ({})
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function
    },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rightItems () {
      if (this.selected[this.level]) {
        let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
        if (selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children
        }
      }
      return null
    }
  },
  methods: {
    rightArrowVisible (item) {
      return this.loadData ? !item.isLeaf : item.children
    },
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
      overflow: auto;

      .label {
        padding: .5em 1em;
        display: flex;
        align-items: center;
        cursor: pointer;
        white-space: nowrap;

        &:hover {
          background: $grey;
        }

        > .name {
          margin-right: 1em;
          user-select: none;
        }

        .icons {
          margin-left: auto;

          .next {
            transform: scale(0.6);
          }

          .loading {
            animation: spin 2s infinite linear;
          }
        }
      }
    }

    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
  }
</style>
