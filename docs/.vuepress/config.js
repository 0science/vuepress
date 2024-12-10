import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  port: 8090,
  title: '赛博空间',
  description: '一个汇集了我所学知识的仓库',
  head: [['link', { rel: 'icon', href: 'image/monkey.ico' }]],
  theme: defaultTheme({

    logo: '/image/monkey.ico',

    navbar: [
      // 导航栏
      {
        text: '导航',
        link: '/guide/README.md',
      },
      {
        text: '考研',
        link: '/guide/examination/README.md',
      },
      {
        text: '课程',
        link: '/guide/course/README.md',
      },
      {
        text: '软件',
        link: '/guide/software/README.md',
      },
      {
        text: '项目',
        link: '/guide/project/README.md',
      },
      {
        text: '技巧',
        link: '/guide/skill/README.md',
      },
      {
        text: '总结',
        link: '/guide/summarize/README.md',
      },
      {
        text: '小记',
        link: '/guide/diary/README.md',
      },

      //折叠导航栏
      {
        text: '其他',
        children: ['/', '/'],
      },
    ],

    
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
