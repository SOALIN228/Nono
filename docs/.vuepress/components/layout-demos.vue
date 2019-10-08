<template>
  <div>
    <h2>基础布局</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <n-row>
          <n-col :span="24">
            <div class="grid-content bg-purple-dark"></div>
          </n-col>
        </n-row>
        <n-row>
          <n-col :span="12">
            <div class="grid-content bg-purple"></div>
          </n-col>
          <n-col :span="12">
            <div class="grid-content bg-purple-light"></div>
          </n-col>
        </n-row>
        <n-row>
          <n-col :span="8">
            <div class="grid-content bg-purple"></div>
          </n-col>
          <n-col :span="8">
            <div class="grid-content bg-purple-light"></div>
          </n-col>
          <n-col :span="8">
            <div class="grid-content bg-purple"></div>
          </n-col>
        </n-row>
        <n-row>
          <n-col :span="6">
            <div class="grid-content bg-purple"></div>
          </n-col>
          <n-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </n-col>
          <n-col :span="6">
            <div class="grid-content bg-purple"></div>
          </n-col>
          <n-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </n-col>
        </n-row>
        <n-row>
          <n-col :span="4">
            <div class="grid-content bg-purple"></div>
          </n-col>
          <n-col :span="4">
            <div class="grid-content bg-purple-light"></div>
          </n-col>
          <n-col :span="4">
            <div class="grid-content bg-purple"></div>
          </n-col>
          <n-col :span="4">
            <div class="grid-content bg-purple-light"></div>
          </n-col>
          <n-col :span="4">
            <div class="grid-content bg-purple"></div>
          </n-col>
          <n-col :span="4">
            <div class="grid-content bg-purple-light"></div>
          </n-col>
        </n-row>
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
    <h2>分栏间隔</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <n-row :gutter="10">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeGutter}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)">
        <n-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></n-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h2>分栏偏移</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <n-row :gutter="20">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row :gutter="20">
          <n-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row :gutter="20">
          <n-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeOffset}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)">
        <n-icon class="icon-down" :name="isShow[2] === false ? 'down' : 'up'"></n-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h2>对齐方式</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <n-row type="flex" class="row-bg">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row type="flex" class="row-bg" justify="center">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row type="flex" class="row-bg" justify="end">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row type="flex" class="row-bg" justify="space-between">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row type="flex" class="row-bg" justify="space-around">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeJustify}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(3)">
        <n-icon class="icon-down" :name="isShow[3] === false ? 'down' : 'up'"></n-icon>
        <span class="lock-code-word">{{isShow[3] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h2>响应式布局</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <n-row :gutter="10">
          <n-col :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
            <div class="grid-content bg-purple"></div>
          </n-col>
          <n-col :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
            <div class="grid-content bg-purple-light"></div>
          </n-col>
          <n-col :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
            <div class="grid-content bg-purple"></div>
          </n-col>
          <n-col :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
            <div class="grid-content bg-purple-light"></div>
          </n-col>
        </n-row>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeResponsive}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(4)">
        <n-icon class="icon-down" :name="isShow[4] === false ? 'down' : 'up'"></n-icon>
        <span class="lock-code-word">{{isShow[4] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../../../src/components/Icon/icon'
import Row from '../../../src/components/Row/row'
import Col from '../../../src/components/Col/col'
import mixin from '../mixin'

export default {
  name: 'layout-demos',
  components: {
    'n-icon': Icon,
    'n-row': Row,
    'n-col': Col
  },
  mixins: [mixin],
  data () {
    return {
      codeBase: `
        <n-row>
          <n-col :span="24"><div class="grid-content bg-purple-dark"></div></n-col>
        </n-row>
        <n-row>
          <n-col :span="12"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="12"><div class="grid-content bg-purple-light"></div></n-col>
        </n-row>
        <n-row>
          <n-col :span="8"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="8"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="8"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
        </n-row>
        <n-row>
          <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="4"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="4"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="4"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
        </n-row>

        <style lang="scss" scoped>
          .n-row {
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
            }
          }
          .n-col {
            border-radius: 4px;
          }
          .bg-purple-dark {
            background: #99a9bf;
          }
          .bg-purple {
            background: #d3dce6;
          }
          .bg-purple-light {
            background: #e5e9f2;
          }
          .grid-content {
            border-radius: 4px;
            min-height: 36px;
          }
        </style>
        `.replace(/^ {8}/gm, '').trim(),
      codeGutter: `
        <n-row :gutter="10">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>

        <style lang="scss" scoped>
          .n-row {
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
            }
          }
          .n-col {
            border-radius: 4px;
          }
          .bg-purple {
            background: #d3dce6;
          }
          .grid-content {
            border-radius: 4px;
            min-height: 36px;
          }
        </style>
        `.replace(/^ {8}/gm, '').trim(),
      codeOffset: `
        <n-row :gutter="20">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row :gutter="20">
          <n-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row :gutter="20">
          <n-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>

        <style lang="scss" scoped>
          .n-row {
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
            }
          }
          .n-col {
            border-radius: 4px;
          }
          .bg-purple {
            background: #d3dce6;
          }
          .grid-content {
            border-radius: 4px;
            min-height: 36px;
          }
        </style>
        `.replace(/^ {8}/gm, '').trim(),
      codeJustify: `
        <n-row type="flex" class="row-bg">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row type="flex" class="row-bg" justify="center">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row type="flex" class="row-bg" justify="end">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row type="flex" class="row-bg" justify="space-between">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>
        <n-row type="flex" class="row-bg" justify="space-around">
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
        </n-row>

        <style lang="scss" scoped>
          .n-row {
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
            }
          }
          .n-col {
            border-radius: 4px;
          }
          .bg-purple-dark {
            background: #99a9bf;
          }
          .bg-purple {
            background: #d3dce6;
          }
          .bg-purple-light {
            background: #e5e9f2;
          }
          .grid-content {
            border-radius: 4px;
            min-height: 36px;
          }
          .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
          }
        </style>
        `.replace(/^ {8}/gm, '').trim(),
      codeResponsive: `
        <n-row :gutter="10">
          <n-col :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}"><div class="grid-content bg-purple"></div></n-col>
          <n-col :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}"><div class="grid-content bg-purple-light"></div></n-col>
          <n-col :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}"><div class="grid-content bg-purple"></div></n-col>
          <n-col :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}"><div class="grid-content bg-purple-light"></div></n-col>
        </n-row>

        <style lang="scss" scoped>
          .n-row {
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
            }
          }
          .n-col {
            border-radius: 4px;
          }
          .bg-purple {
            background: #d3dce6;
          }
          .bg-purple-light {
            background: #e5e9f2;
          }
          .grid-content {
            border-radius: 4px;
            min-height: 36px;
          }
        </style>
        `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
  *{
    box-sizing: border-box;
  }

  .n-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .n-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
