<template>
  <div class="n-carousel">
    <div class="n-carousel-window" ref="window">
      <div class="n-carousel-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="n-carousel-dots">
      <span v-for="n in childrenLength" :key="n"
            :class="{active: selectedIndex === n-1}"
            @click="select(n-1)"
      >
        {{n-1}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'n-carousel',
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined
    }
  },
  mounted () {
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.$children.length // 获取子元素的长度
  },
  updated () {
    this.updateChildren()
  },
  computed: {
    selectedIndex () {
      return this.names.indexOf(this.selected) || 0 // 未选中默认选择第1张
    },
    names () {
      return this.$children.map(vm => vm.name)
    }
  },
  methods: {
    /* eslint-disable */
    playAutomatically () {
      let index = this.names.indexOf(this.getSelected())
      let run = () => {
        let newIndex = index - 1
        if (newIndex === -1) {
          newIndex = this.names.length - 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        this.select(newIndex)
        setTimeout(run, 3000)
      }
    },
    select (index) {
      this.lastSelectedIndex = this.selectedIndex // 上次轮播的位置
      this.$emit('update:selected', this.names[index])
    },
    getSelected () {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren () {
      let selected = this.getSelected()
      this.$children.forEach((vm) => {
        vm.reverse = this.selectedIndex <= this.lastSelectedIndex // 设置子元素动画是正向还是反向
        this.$nextTick(() => {
          vm.selected = selected
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .n-carousel {

    &-window {
      overflow: hidden;
    }

    &-wrapper {
      position: relative;
    }

    &-dots {
      > span {
        &.active {
          background: red;
        }
      }
    }
  }
</style>
