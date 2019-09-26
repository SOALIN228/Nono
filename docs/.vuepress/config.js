module.exports = {
  base: '/Nono/',
  title: 'Nono-UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/SOALIN228/Nono' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: ['/components/button']
      }
    ]
  }
}
