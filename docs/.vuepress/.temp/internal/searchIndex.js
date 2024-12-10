export const searchIndex = [
  {
    "title": "主页",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "课程",
        "slug": "课程",
        "link": "#课程",
        "children": [
          {
            "level": 3,
            "title": "计算机基础",
            "slug": "计算机基础",
            "link": "#计算机基础",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "技巧",
        "slug": "技巧",
        "link": "#技巧",
        "children": []
      }
    ],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/guide/course/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/guide/examination/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/guide/project/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Git",
    "headers": [
      {
        "level": 2,
        "title": "一、Git介绍",
        "slug": "一、git介绍",
        "link": "#一、git介绍",
        "children": [
          {
            "level": 3,
            "title": "Git是什么",
            "slug": "git是什么",
            "link": "#git是什么",
            "children": []
          },
          {
            "level": 3,
            "title": "Git工作流程",
            "slug": "git工作流程",
            "link": "#git工作流程",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "二、Git安装配置",
        "slug": "二、git安装配置",
        "link": "#二、git安装配置",
        "children": [
          {
            "level": 3,
            "title": "下载安装",
            "slug": "下载安装",
            "link": "#下载安装",
            "children": []
          },
          {
            "level": 3,
            "title": "新建仓库",
            "slug": "新建仓库",
            "link": "#新建仓库",
            "children": []
          },
          {
            "level": 3,
            "title": "配置用户名和邮箱",
            "slug": "配置用户名和邮箱",
            "link": "#配置用户名和邮箱",
            "children": []
          },
          {
            "level": 3,
            "title": "报错修改",
            "slug": "报错修改",
            "link": "#报错修改",
            "children": []
          },
          {
            "level": 3,
            "title": "查看配置",
            "slug": "查看配置",
            "link": "#查看配置",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "三、Git的基本操作",
        "slug": "三、git的基本操作",
        "link": "#三、git的基本操作",
        "children": [
          {
            "level": 3,
            "title": "速查表",
            "slug": "速查表",
            "link": "#速查表",
            "children": []
          },
          {
            "level": 3,
            "title": "查看内容",
            "slug": "查看内容",
            "link": "#查看内容",
            "children": []
          },
          {
            "level": 3,
            "title": "修改内容",
            "slug": "修改内容",
            "link": "#修改内容",
            "children": []
          },
          {
            "level": 3,
            "title": "提交内容",
            "slug": "提交内容",
            "link": "#提交内容",
            "children": []
          },
          {
            "level": 3,
            "title": "回滚操作",
            "slug": "回滚操作",
            "link": "#回滚操作",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "四、Git的分支操作",
        "slug": "四、git的分支操作",
        "link": "#四、git的分支操作",
        "children": [
          {
            "level": 3,
            "title": "增删改查",
            "slug": "增删改查",
            "link": "#增删改查",
            "children": []
          },
          {
            "level": 3,
            "title": "标签管理",
            "slug": "标签管理",
            "link": "#标签管理",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "五、Git的远程仓库",
        "slug": "五、git的远程仓库",
        "link": "#五、git的远程仓库",
        "children": []
      }
    ],
    "path": "/guide/skill/Git.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/guide/skill/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/guide/software/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/guide/summarize/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/guide/diary/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
