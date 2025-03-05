import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  port: 8090,
  title: '赛博空间',
  description: '一个汇集了我所学知识的仓库',
  base: '/vuepress/',
  head: [['link', { rel: 'icon', href: 'image/monkey.ico' }]],
  theme: defaultTheme({

    logo: '/image/monkey.ico',

    navbar: [
      // 导航栏
      {
        text: '主页',
        link: '/guide/README.md',
      },
      {
        text: 'HTML',
        children:[
          {
            text: '前置准备',
            link: '/guide/02.HTML/前置准备.md',
          },
          {
            text: 'HTML基础',
            link: '/guide/02.HTML/HTML基础.md',
          },
          {
            text: 'HTML高级',
            link: '/guide/02.HTML/HTML高级.md',
          }
        ]
      },
      {
        text: 'CSS',
        children:[
          {
            text: '网格布局',
            link: '/guide/03.CSS/网格布局.md',
          },
          {
            text: 'CSS基础',
            link: '/guide/03.CSS/CSS基础.md',
          },
          {
            text: 'CSS高级',
            link: '/guide/03.CSS/CSS高级.md',
          },
          {
            text: 'CSS实战',
            link: '/guide/03.CSS/CSS实战.md',
          }
        ]
      },
      {
        text: 'Javascript',
        children:[
          {
            text: '前言',
            link: '/guide/04.Javascript/前言.md',
          },
          {
            text: '语法',
            link: '/guide/04.Javascript/语法.md',
          },
          {
            text: '函数',
            link: '/guide/04.Javascript/函数.md',
          },
          {
            text: '事件',
            link: '/guide/04.Javascript/事件.md',
          },
          {
            text: '数组',
            link: '/guide/04.Javascript/数组.md',
          },
          {
            text: '对象',
            link: '/guide/04.Javascript/对象.md',
          },
          {
            text: 'Ajax',
            link: '/guide/04.Javascript/Ajax.md',
          },
          {
            text: 'BOM',
            link: '/guide/04.Javascript/BOM.md',
          },
          {
            text: 'DOM',
            link: '/guide/04.Javascript/DOM.md',
          },
          {
            text: '正则表达式',
            link: '/guide/04.Javascript/正则表达式.md',
          },
          {
            text: 'jQuery',
            link: '/guide/04.Javascript/jQuery.md',
          },
          {
            text: '实战',
            link: '/guide/04.Javascript/Javascript实战.md',
          },
        ]
      },
    ]
  }),
  bundler: webpackBundler(),
  //插件
  plugins: [
    //回到顶部
    backToTopPlugin(),
    //搜索
    searchPlugin({
      locales: {
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],

})
