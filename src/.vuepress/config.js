module.exports = {
  title: "点滴文档",
  description: "点滴记录",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }], // favicon
  ],
  host: "localhost",
  base: process.env.VUEPRESS_BASE || '/doc/', // 默认用 /doc/，Netlify 可覆盖
  dest: "docs", // 因为GitHub的Pages服务仅支持docs目录
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    // ['vuepress-plugin-nuggets-style-copy', { copyText: '复制代码' }],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["blackCat"],
        clean: true,
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "指南",
        items: [
          { text: "使用指南", link: "/life/daily" },
          { text: "金融理财", link: "/life/financing" },
        ],
      },
      { text: "设计", link: "/design/" },
      { text: "摄影", link: "/album/" },
      {
        text: "网址",
        items: [
          { text: "配置文档", link: "https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html" },
          { text: "影视资源", link: "https://www.libvio.cc/" },
        ],
      },
      { text: "联系我", link: "/contact/" },
      { text: "GitHub", link: "https://github.com/jasonbai008/doc" },
    ],
    sidebar: "auto", // 侧栏根据页面标题自动生成导航
    lastUpdated: "Last Updated", // string | boolean
    smoothScroll: true,
  },
};
