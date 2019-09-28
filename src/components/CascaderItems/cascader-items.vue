<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item" :key="item.name">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <n-cascader-items :items="rightItems"></n-cascader-items>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NCascaderItems',
  props: {
    items: {
      type: Array
    }
  },
  data () {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems () {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    .left {
      border: 1px solid red;
    }

    .right {
      margin-top: -1px;
    }
  }
</style>
