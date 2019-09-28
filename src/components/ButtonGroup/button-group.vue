<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NButtonGroup',
  mounted () {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLocaleLowerCase()
      if (name !== 'button') {
        console.warn(`g-button-group 的子元素应该为 g-button, 但你写了 ${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../var";

  .button-group {
    display: inline-flex;
    vertical-align: middle;

    > .button {
      border-radius: 0;

      &:not(:first-child) {
        margin-left: -1px;
      }

      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }

      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }

      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
