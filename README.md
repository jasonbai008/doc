# Drip Document 点滴文档

A Document Template powered by VuePress 1.x.

<img src="https://jasonbai008.github.io/doc/qr.png" width="200">

## How to USE

```sh
# 启动开发环境
npm run dev
# 如果上面的命令报错
npm run dev2

# 打包
npm run build
# 如果上面的命令报错
npm run build2

# 提交到远程代码仓库，自动部署
npm run deploy
```

## Features

- 支持热更新
- 支持自动打开浏览器
- 支持返回顶部
- 支持外链资源
- 支持一键部署
- 支持图片放映
- 支持自定义样式
- 支持自定义主题色
- 支持自定义组件
- 暂时去掉了代码一键复制【vuepress-plugin-nuggets-style-copy】
- 支持留言板和阅读量统计
- 支持[看板娘](https://vuepress-theme-reco.recoluan.com/views/plugins/kanbanniang.html)

## Directory Structure

```
├── docs (打包后目录)
├── src  (博客文档源文件)
│   ├── .vuepress
│   │   ├── components
│   │   ├── theme
│   │   │   └── Layout.vue
│   │   ├── public (图片资源)
│   │   ├── styles
│   │   │   ├── index.styl  (自定义样式)
│   │   │   └── palette.styl  (全局主题样式变量)
│   │   └── config.js  (路由导航)
│   │
│   ├── README.md
│   ├── guide
│       └── README.md
│
└── package.json
```

## Notes

1. VuePress 默认 docs 作为基准目录，但是为了使用 GitHub 的 Pages 服务，改为 src 了
2. 打包后的目录从 dist 改为了 docs
3. .temp 是临时文件夹，无需提交到远程
4. .vuepress 文件夹是项目的配置文件夹
5. 由于 Gitee 审查不透明，经常无法部署，所以只能选择 GitHub 的 Pages 服务
6. 由于国内封锁,GitHub 只能偶尔 push 代码成功，需要反复多次尝试
7. Github 提交代码后，等待一两分钟，刷新页面，博客会更新
8. Gitee 提交代码后，需要手动更新 Pages
9. 可以使用草料二维码生成自己的博客地址二维码
10. 借助 [Valine](https://valine.js.org/) 和 [LeanCloud](https://www.leancloud.cn/) 实现了留言板功能
11. 你需要在 LeanCloud 中注册登录，新建一个应用，从应用设置界面拿到 appKey 和 appId
