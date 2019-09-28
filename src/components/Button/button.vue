<template>
  <button class="button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <n-icon :name="icon" class="icon" v-if="icon && !loading"></n-icon>
    <n-icon class="loading icon" name="loading" v-if="loading"></n-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../Icon/icon'

export default {
  name: 'NButton',
  components: {
    'n-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) { // 只能传递left或right，否则报错
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../var";

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    color: $color;

    &:hover {
      border-color: $border-color-hover;
    }

    &:active {
      background-color: $button-active-bg;
    }

    &:focus {
      outline: none;
    }

    > .content {
      order: 2;
    }

    > .icon {
      order: 1;
      margin-right: .1em;
    }

    &.icon-right {
      > .content {
        order: 1;
      }

      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
    }

    .loading {
      animation: spin 1s infinite linear;
    }
  }
</style>
