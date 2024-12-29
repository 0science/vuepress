export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"主页\",\"actions\":[{\"text\":\"开始\",\"link\":\"/guide/README.md\",\"type\":\"primary\"}],\"features\":[{\"title\":\"我的笔记\",\"details\":\"记录学习过程中的笔记\"},{\"title\":\"我的博客\",\"details\":\"记录学习过程中的博客\"},{\"title\":\"我的项目\",\"details\":\"记录学习过程中的项目\"}]},\"headers\":[],\"git\":{\"updatedTime\":1734959402000,\"contributors\":[{\"name\":\"djm\",\"email\":\"1415847612@qq.com\",\"commits\":3}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
