<template>
  <div>
    <h2>基础用法</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <n-button>默认按钮</n-button>
        <n-button icon="settings">图标按钮</n-button>
        <n-button :loading="true">loading按钮</n-button>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeBase}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <n-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></n-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h2>按钮组</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <n-button-group>
          <n-button icon="left">L</n-button>
          <n-button icon="right" iconPosition="right">R</n-button>
        </n-button-group>
        <n-button-group>
          <n-button>L</n-button>
          <n-button>M</n-button>
          <n-button>R</n-button>
        </n-button-group>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeGroup}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)">
        <n-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></n-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../../../src/components/Icon/icon'
import Button from '../../../src/components/Button/button'
import ButtonGroup from '../../../src/components/ButtonGroup/button-group'
import mixin from '../mixin'

export default {
  name: 'button-demos',
  components: {
    'n-icon': Icon,
    'n-button': Button,
    'n-button-group': ButtonGroup
  },
  mixins: [mixin],
  data () {
    return {
      codeBase: `
        <n-button>默认按钮</n-button>
        <n-button icon="settings">图标按钮</n-button>
        <n-button :loading="true">loading按钮</n-button>
        `.replace(/^ {8}/gm, '').trim(),
      codeGroup: `
        <n-button-group>
          <n-button icon="left">L</n-button>
          <n-button icon="right" iconPosition="right">R</n-button>
        </n-button-group>
        <n-button-group>
          <n-button>L</n-button>
          <n-button>M</n-button>
          <n-button>R</n-button>
        </n-button-group>
        `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style scoped>

</style>
