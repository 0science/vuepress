export const themeData = JSON.parse("{\"logo\":\"/image/monkey.ico\",\"navbar\":[{\"text\":\"主页\",\"link\":\"/guide/README.md\"},{\"text\":\"HTML\",\"children\":[{\"text\":\"前置准备\",\"link\":\"/guide/02.HTML/前置准备.md\"},{\"text\":\"HTML基础\",\"link\":\"/guide/02.HTML/HTML基础.md\"},{\"text\":\"HTML高级\",\"link\":\"/guide/02.HTML/HTML高级.md\"}]},{\"text\":\"CSS\",\"children\":[{\"text\":\"网格布局\",\"link\":\"/guide/03.CSS/网格布局.md\"},{\"text\":\"CSS基础\",\"link\":\"/guide/03.CSS/CSS基础.md\"},{\"text\":\"CSS高级\",\"link\":\"/guide/03.CSS/CSS高级.md\"},{\"text\":\"CSS实战\",\"link\":\"/guide/03.CSS/CSS实战.md\"}]},{\"text\":\"Javascript\",\"children\":[{\"text\":\"前言\",\"link\":\"/guide/04.Javascript/前言.md\"},{\"text\":\"语法\",\"link\":\"/guide/04.Javascript/语法.md\"},{\"text\":\"函数\",\"link\":\"/guide/04.Javascript/函数.md\"},{\"text\":\"事件\",\"link\":\"/guide/04.Javascript/事件.md\"},{\"text\":\"数组\",\"link\":\"/guide/04.Javascript/数组.md\"},{\"text\":\"对象\",\"link\":\"/guide/04.Javascript/对象.md\"},{\"text\":\"Ajax\",\"link\":\"/guide/04.Javascript/Ajax.md\"},{\"text\":\"BOM\",\"link\":\"/guide/04.Javascript/BOM.md\"},{\"text\":\"DOM\",\"link\":\"/guide/04.Javascript/DOM.md\"},{\"text\":\"正则表达式\",\"link\":\"/guide/04.Javascript/正则表达式.md\"},{\"text\":\"jQuery\",\"link\":\"/guide/04.Javascript/jQuery.md\"},{\"text\":\"实战\",\"link\":\"/guide/04.Javascript/实战.md\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
