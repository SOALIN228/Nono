<template>
  <div class="n-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NRow',
  props: {
    gutter: {
      type: [Number, String]
    },
    justify: {
      type: String,
      validator (value) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    rowStyle () {
      return {
        marginLeft: -this.gutter / 2 + 'px',
        marginRight: -this.gutter / 2 + 'px'
      }
    },
    rowClass () {
      return [this.justify && `flex-${this.justify}`]
    }
  },
  mounted () {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>
  .n-row {
    display: flex;
    flex-wrap: wrap;

    &.flex-start {
      justify-content: flex-start;
    }

    &.flex-end {
      justify-content: flex-end;
    }

    &.flex-center {
      justify-content: center;
    }

    &.flex-space-around {
      justify-content: space-around;
    }

    &.flex-space-between {
      justify-content: space-between;
    }
  }
</style>
