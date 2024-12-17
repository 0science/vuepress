export const themeData = JSON.parse("{\"logo\":\"/image/monkey.ico\",\"navbar\":[{\"text\":\"主页\",\"link\":\"/guide/README.md\"},{\"text\":\"HTML\",\"link\":\"/guide/HTML/README.md\"},{\"text\":\"JavaScript\",\"link\":\"/guide/javascript/README.md\"},{\"text\":\"考研\",\"link\":\"/guide/examination/README.md\"},{\"text\":\"课程\",\"link\":\"/guide/course/README.md\"},{\"text\":\"软件\",\"link\":\"/guide/software/README.md\"},{\"text\":\"项目\",\"link\":\"/guide/project/README.md\"},{\"text\":\"技巧\",\"link\":\"/guide/skill/README.md\"},{\"text\":\"总结\",\"link\":\"/guide/summarize/README.md\"},{\"text\":\"小记\",\"link\":\"/guide/diary/README.md\"},{\"text\":\"其他\",\"children\":[\"/\",\"/\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
