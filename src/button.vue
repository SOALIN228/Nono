<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <g-icon :name="icon" class="icon" v-if="icon"></g-icon>
    <g-icon name="loading" class="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'g-button',
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) { // 只能传递left或right，否则报错
        return value === 'left' || value === 'right'
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
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
