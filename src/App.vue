<template>
  <div id="app">
    <n-carousel class="wrapper" :selected.sync="selected">
      <n-carousel-item name="1">
        <div class="box">1</div>
      </n-carousel-item>
      <n-carousel-item name="2">
        <div class="box">2</div>
      </n-carousel-item>
      <n-carousel-item name="3">
        <div class="box">3</div>
      </n-carousel-item>
    </n-carousel>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      selected: '2'
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    margin: 40px;
  }

  .box {
    height: 350px;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
</style>
