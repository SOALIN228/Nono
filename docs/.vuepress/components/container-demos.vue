<template>
  <div>
    <h2>常见页面布局</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <n-layout>
          <n-header>Header</n-header>
          <n-content>Content</n-content>
          <n-footer>Footer</n-footer>
        </n-layout>
        <br>
        <n-layout>
          <n-header>Header</n-header>
          <n-layout>
            <n-sider style="width:200px">Sider</n-sider>
            <n-content>Content</n-content>
          </n-layout>
          <n-footer>Footer</n-footer>
        </n-layout>
        <br>
        <n-layout>
          <n-sider style="width:200px">Sider</n-sider>
          <n-layout>
            <n-header>Header</n-header>
            <n-content>Content</n-content>
            <n-footer>Footer</n-footer>
          </n-layout>
        </n-layout>
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
  </div>
</template>

<script>
import Icon from '../../../src/components/Icon/icon'
import Layout from '../../../src/components/Layout/layout'
import Header from '../../../src/components/Header/header'
import Content from '../../../src/components/Content/content'
import Sider from '../../../src/components/Sider/sider'
import Footer from '../../../src/components/Footer/footer'
import mixin from '../mixin'

export default {
  name: 'container-demos',
  components: {
    'n-icon': Icon,
    'n-layout': Layout,
    'n-header': Header,
    'n-content': Content,
    'n-sider': Sider,
    'n-footer': Footer
  },
  mixins: [mixin],
  data () {
    return {
      codeBase: `
        <n-layout>
          <n-header>Header</n-header>
          <n-content>Content</n-content>
          <n-footer>Footer</n-footer>
        </n-layout>

        <n-layout>
          <n-header>Header</n-header>
          <n-layout>
            <n-sider style="width:200px">Sider</n-sider>
            <n-content>Content</n-content>
          </n-layout>
          <n-footer>Footer</n-footer>
        </n-layout>

        <n-layout>
          <n-sider style="width:200px">Sider</n-sider>
          <n-layout>
            <n-header>Header</n-header>
            <n-content>Content</n-content>
            <n-footer>Footer</n-footer>
          </n-layout>
        </n-layout>

        <style lang="scss" scoped>
          .n-header, .n-footer {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
          }

          .n-sider {
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;
          }

          .n-content {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
            line-height: 160px;
          }
        </style>
        `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
  .n-header, .n-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .n-sider {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .n-content {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
