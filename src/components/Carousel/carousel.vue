<template>
  <div class="n-carousel" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
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
        {{n}}
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
      lastSelectedIndex: undefined,
      timerId: undefined
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
    onMouseEnter () {
      this.pause()
    },
    onMouseLeave () {
      this.playAutomatically()
    },
    /* eslint-disable */
    playAutomatically () {
      if (this.timerId) {
        return
      }
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        this.select(newIndex)
        this.timerId = setTimeout(run, 3000)
      }
      this.timerId = setTimeout(run, 3000)
    },
    pause () {
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    select (newIndex) {
      this.lastSelectedIndex = this.selectedIndex // 上次轮播的位置
      if (newIndex === -1) {
        newIndex = this.names.length - 1
      }
      if (newIndex === this.names.length) {
        newIndex = 0
      }
      this.$emit('update:selected', this.names[newIndex])
    },
    getSelected () {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren () {
      let selected = this.getSelected()
      this.$children.forEach((vm) => {
        let reverse = this.selectedIndex <= this.lastSelectedIndex // 设置子元素动画是正向还是反向
        if (this.timerId) {
          if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
            reverse = true
          }
        }
        vm.reverse = reverse
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
      padding: 8px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        width: 20px;
        height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #ddd;
        border-radius: 50%;
        margin: 0 8px;
        font-size: 12px;

        &:hover {
          cursor: pointer;
        }

        &.active {
          background: black;
          color: white;
        }
      }
    }
  }
</style>
