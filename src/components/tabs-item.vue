<template>
  <div class="tabs-item" :class="classes" @click="onClick" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NTabsItem',
  inject: ['eventBus'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    classes () {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created () {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    }
  },
  methods: {
    onClick () {
      if (this.disabled) {
        return
      }
      this.eventBus.$emit('update:selected', this.name, this)
      this.$emit('click', this)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "var";

  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    color: $black;

    &:hover {
      color: $blue;
    }

    &.active {
      color: $blue;
      font-weight: 500;
    }

    &.disabled {
      color: $disabled-text-color;

      &:hover {
        cursor: not-allowed;
        color: rgba(0, 0, 0, 0.25);
      }
    }
  }
</style>
