<template>
  <div id="app">
    <p>{{selected &&selected[0] &&selected[0].name || '空'}}</p>
    <p>{{selected &&selected[1] &&selected[1].name || '空'}}</p>
    <p>{{selected &&selected[2] &&selected[2].name || '空'}}</p>
    <div style="padding: 20px;">
      <n-cascader :source.sync="source"
                  popover-height="200px"
                  @update:source="onUpdateSource"
                  @update:selected="onUpdateSelected"
                  :selected.sync="selected"
                  :load-data="loadData"
      ></n-cascader>
    </div>
    {{selected.map(item=> item.name)}}
  </div>
</template>

<script>
import db from './db'

function ajax (parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parentId)
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      resolve(result)
    }, 3000)
  })
}

export default {
  name: 'app',
  data () {
    return {
      selected: [],
      source: []
    }
  },
  created () {
    ajax(0).then(result => {
      this.source = result
    })
  },
  methods: {
    loadData ({ id }, updateSource) {
      ajax(id).then(result => {
        updateSource(result) // 回调:把别人传给我的函数调用一下
      })
    },
    onUpdateSource () {
    },
    onUpdateSelected () {
    }
  }
}
</script>

<style lang="scss">
</style>
