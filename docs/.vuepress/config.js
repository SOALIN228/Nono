module.exports = {
  base: '/Nono/',
  title: 'Nono-ui',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/SOALIN228/Nono' },
    ],
    sidebar: [
      {
        title: '开发指南',
        children: [
          '/guide/',
          '/guide/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/guide/components/button',
          '/guide/components/input'
        ]
      }
    ]
  }
}
