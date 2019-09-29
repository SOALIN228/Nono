<template>
  <div id="app">
    <p>{{selected &&selected[0] &&selected[0].name || '空'}}</p>
    <p>{{selected &&selected[1] &&selected[1].name || '空'}}</p>
    <p>{{selected &&selected[2] &&selected[2].name || '空'}}</p>
    <n-cascader :source="source" popover-height="200px" :selected="selected"
                @update:selected="selected = $event"></n-cascader>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      selected: [],
      source: [{
        name: '浙江',
        children: [
          {
            name: '杭州',
            children: [
              { name: '上城' },
              { name: '下城' },
              { name: '江干' }
            ]
          },
          {
            name: '嘉兴',
            children: [
              { name: '南湖' },
              { name: '秀洲' },
              { name: '嘉善' }
            ]
          }
        ]
      }, {
        name: '福建',
        children: [
          {
            name: '福州',
            children: [
              { name: '鼓楼' },
              { name: '台江' },
              { name: '仓山' }
            ]
          }
        ]
      }, {
        name: '安徽',
        children: [{
          name: '合肥',
          children: [{
            name: '瑶海'
          }, {
            name: '庐阳'
          }]
        }]
      }]
    }
  }
}
</script>

<style lang="scss">
</style>
