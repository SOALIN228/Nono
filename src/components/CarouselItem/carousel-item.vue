<template>
  <div>
    <template v-if="animationEnabled">
      <transition name="carousel">
        <div class="n-carousel-item" v-if="visible" :class="{reverse}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="n-carousel-item" v-if="visible" :class="{reverse}">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NCarouselItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: undefined,
      reverse: false,
      animationEnabled: false
    }
  },
  computed: {
    visible () {
      return this.selected === this.name
    }
  },
  updated () {
    this.animationEnabled = true
  }
}
</script>

<style lang="scss" scoped>
  .n-carousels-item {
  }

  .carousel-leave-active {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .carousel-enter-active, .carousel-leave-active {
    transition: all 1s;
  }

  .carousel-enter {
    transform: translateX(100%);
  }

  .carousel-enter.reverse {
    transform: translateX(-100%);
  }

  .carousel-leave-to {
    transform: translateX(-100%);
  }

  .carousel-leave-to.reverse {
    transform: translateX(100%);
  }
</style>
