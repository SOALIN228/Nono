<template>
  <div>
    <h2>基础用法</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <n-input value="默认"></n-input>
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
    <h2>禁用状态</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <n-input value="禁用" disabled></n-input>
        <n-input value="禁用" readonly></n-input>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeDisabled}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)">
        <n-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></n-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h2>错误状态</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <n-input value="错误" error="请输入正确的内容"></n-input>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeError}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)">
        <n-icon class="icon-down" :name="isShow[2] === false ? 'down' : 'up'"></n-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../../../src/components/Icon/icon'
import Input from '../../../src/components/Input/input'
import mixin from '../mixin'

export default {
  name: 'input-demos',
  components: {
    'n-icon': Icon,
    'n-input': Input
  },
  mixins: [mixin],
  data () {
    return {
      codeBase: `
        <n-input value="默认"></n-input>
        `.replace(/^ {8}/gm, '').trim(),
      codeDisabled: `
        <n-input value="禁用" disabled></n-input>
        <n-input value="禁用" readonly></n-input>
        `.replace(/^ {8}/gm, '').trim(),
      codeError: `
        <n-input value="错误" error="请输入正确的内容"></n-input>
        `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style scoped>

</style>
