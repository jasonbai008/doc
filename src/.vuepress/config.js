module.exports = {
    title: '小白的博客',
    description: '小白的个人博客',
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
                text: '生活',
                items: [
                    { text: '日常记录', link: '/life/daily' },
                    { text: '金融理财', link: '/life/financing' },
                    { text: '职场法律', link: '/life/law' },
                    { text: '医学健康', link: '/life/health' },
                    { text: '诗词收藏', link: '/life/poems' },
                ]
            },
            {
                text: '技术', items: [
                    { text: '实用技术', link: '/tech/useful' },
                ]
            },
            { text: '摄影', link: '/album/' },
            {
                text: '实用网址',
                items: [
                    { text: '影视资源', link: 'https://www.nunuyy10.top' },
                    { text: '科学上网', link: 'https://github.com/freefq/free' },
                    { text: '博客主题', link: 'https://vuepress.vuejs.org/zh/theme/default-theme-config.html' },
                    { text: '编辑工具', link: 'https://pandao.github.io/editor.md' },
                ]
            },
            { text: '联系我', link: '/contact/' },
            { text: 'GitHub', link: 'https://github.com/JasonBai007' },
        ],
        sidebar: 'auto',  // 侧栏根据页面标题自动生成导航
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
    },

}