<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <n-cascader-item v-if="sourceItem.children"
                     v-for="item in sourceItem.children"
                     :sourceItem="item"
    ></n-cascader-item>
  </div>
</template>

<script>
export default {
  name: 'NCascaderItem',
  props: {
    sourceItem: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  .cascaderItem {
    border: 1px solid red;
    margin: 10px;
  }
</style>
