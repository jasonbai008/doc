module.exports = {
    title: '点滴文档',
    description: '你的全能文档',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]  // favicon
    ],
    host: 'localhost',
    base: '/doc/',  // 同代码仓库名称
    dest: 'docs',   // 因为GitHub的Pages服务仅支持docs目录
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
        ['vuepress-plugin-nuggets-style-copy', { copyText: '复制代码' }],
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ['blackCat'],
                clean: true
            }
        ]
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '指南',
                items: [
                    { text: '使用指南', link: '/life/daily' },
                    { text: '金融理财', link: '/life/financing' },                   
                ]
            },            
            { text: '设计', link: '/design/' },
            { text: '摄影', link: '/album/' },
            {
                text: '网址',
                items: [
                    { text: '影视资源', link: 'https://www.libvio.cc/' },
                    { text: '科学上网', link: 'https://jasonbai008.github.io/tech/surf.html' },
                    { text: '博客主题', link: 'https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html' },
                ]
            },
            { text: '联系我', link: '/contact/' },
            { text: 'GitHub', link: 'https://github.com/jasonbai008/doc' },
        ],
        sidebar: 'auto',  // 侧栏根据页面标题自动生成导航
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
    },

}