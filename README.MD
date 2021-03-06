<img src="https://cdn.jsdelivr.net/gh/czy0729/bangumi@master/preview/bangumi.png" width="100%" />

<p align="center">
  <img alt="Version: 4.0.1" src="https://img.shields.io/badge/Version-4.0.1-0366d6" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-33CC12" />
  <img alt="Codacy" src="https://api.codacy.com/project/badge/Grade/473bdb1186484703b4069148730a3c12?isInternal=true" />
  <img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi/badge" />
</p>

---

一个基于`React-Native`的 [Bangumi](https://bgm.tv) 第三方客户端

项目对标 web, 本人并没有原生开发经验, 用于练手 RN, 安卓和 iOS 都做了兼容, 并最大限度保持一致

目前已开发不少于 70 个页面, 几乎涵盖源网站所有页面

Bangumi 是用于管理追番进度（不限于动漫、音乐、日剧、AVG）, 发现和讨论番组的第三方客户端

## Download

[安卓 APK 下载](https://github.com/czy0729/Bangumi/releases) | [酷安市场下载](https://www.coolapk.com/apk/235642)

苹果好难审, 短时间内都没办法通过, 会跟苹果做长久作战.
[TestFlight](https://testflight.apple.com/join/pAaJ0MWU) | [Expo 试用方法](https://github.com/czy0729/Bangumi/blob/master/IOS-TEST.MD) | [Expo 主页](https://expo.io/@bgm-ios-test/bangumi-pro)

## Features

[特有功能]

- 大部分资源覆盖到自维护 [CDN](https://github.com/czy0729/Bangumi-Subject), 访问速度+++
- 图片使用 [CDN](https://github.com/czy0729/Bangumi-OSS), 有后处理, 所以有比源网站更好的质量和更小的流量
- 章节播放源 / 漫画源查询
- 找番剧 / 文库
- [小圣杯](https://bgm.tv/dev/app/1143) (角色交易空气游戏, App 独立设计 UI 和交互)

[基本功能]

- 番组进度管理
- 条目详情
- 角色
- 时间线 (用户动态)
- 超展开 (帖吧)
- 个人中心 / 用户空间
- 搜索 / 标签 / 排行榜 / 索引 / 目录 / 每日放送 / 年鉴

## Versions

[CHANGELOG](https://github.com/czy0729/Bangumi/blob/master/CHANGELOG.MD)

## Update

v4.0.1 - 2020/10/10

—— 修复 ——

- [x] [进度] 修复了长篇动画例如海贼王, 操作看过后看过的集数不正确的问题
- [x] [条目] 修复了漫画的角色更多列表无法加载的问题
- [x] [条目] 修复了制作人员列表进入制作人员详情无法加载数据的问题
- [x] [帖子] 修复了某些帖子报错的问题
- [x] 修复了部分图和和浏览大图无法加载的问题
- [x] 修复了部分机型启动闪退的问题

v4.0.0 - 2020/10/06

—— 新增 ——

- [x] [首页进度] 可以在设置里面把在玩的游戏也显示 (默认关闭)
- [x] [条目] 吐槽可以根据评分筛选浏览
- [x] [条目] 现在单行本条目, 会有本系列的关联 UI 表现
- [x] [设置] 现在可以选择启动 APP 时是否跟随系统主题
- [x] 条目封面拟物, 增加辨识度 (默认开启, 设置可关闭, 书籍形状、音乐碟片形状、游戏卡带形状)

—— 优化 ——

- [x] [条目] 标题旁显示更细的条目类型 (动画、漫画系列、漫画、小说系列等)
- [x] 升级底层框架版本 (RN@0.59 -> 0.62), 默认修复部分现有问题
- [x] 因框架新版本, android/pageViewer 废弃, 所有旧 Tabs 替换新库实现
- [x] 找番剧、文库的静态数据迁移云端, 缩小包体积
- [x] 列表里自己的头像不走快照, 保证最新
- [x] 屏蔽柠萌瞬间相关, 下版本完全移除
- [x] 现在不会重复进入参数完全相同的页面
- [x] 请求中的转圈可以点击关闭, 避免请求超时无法操作
- [x] 优化了漫画阅读器的图片加载顺序

—— 修复 ——

- [x] [条目] 修复页面进入时, 数据加载慢会重复多次请求吐槽的问题
- [x] [时间胶囊] 修复了范围为自己时, 看过 x of x 集形式文字丢失问题
- [x] 修复漫画无法搜索源头的问题 , 增加了提示
- [x] 修复日志详情页面标题为 undefined 的问题

## PowerBy

[[bangumi-subject]](https://github.com/czy0729/Bangumi-Subject) [![](https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi-Subject/badge)](https://www.jsdelivr.com/package/gh/czy0729/Bangumi-Subject) 条目快照 CDN

[[bangumi-oss]](https://github.com/czy0729/Bangumi-OSS) [![](https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi-OSS/badge)](https://www.jsdelivr.com/package/gh/czy0729/Bangumi-OSS) 热门条目封面和活跃用户头像对象存储 CDN

[[bangumi-rakuen]](https://github.com/czy0729/Bangumi-Rakuen) [![](https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi-Rakuen/badge)](https://www.jsdelivr.com/package/gh/czy0729/Bangumi-Rakuen) 帖子快照 CDN

[[bangumi-mono]](https://github.com/czy0729/Bangumi-Mono) [![](https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi-Mono/badge)](https://www.jsdelivr.com/package/gh/czy0729/Bangumi-Mono) 人物快照 CDN

[[bangumi-static]](https://github.com/czy0729/Bangumi-Static) [![](https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi-Static/badge)](https://www.jsdelivr.com/package/gh/czy0729/Bangumi-Static) 发现数据快照 CDN

[[bangumi-onair]](https://github.com/ekibun/bangumi_onair) [![](https://data.jsdelivr.com/v1/package/gh/ekibun/bangumi_onair/badge)](https://www.jsdelivr.com/package/gh/ekibun/bangumi_onair) [ekibun](https://github.com/ekibun) 的单集播放数据源

[[bangumi-mosaic-tile]](https://github.com/weizhenye/bangumi-mosaic-tile) [weizhenye](https://github.com/weizhenye) 的用户统计瓷砖库

[[bangumi-data]](https://github.com/bangumi-data/bangumi-data) 番组数据索引

[[bangumi-api]](https://github.com/bangumi/api) 官方接口

[[tinygrail.com]](https://tinygrail.com) 小圣杯接口

## Preview

#### 基础功能

<img src="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/1.png" alt="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/1.png" width="100%" /><img src="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/2.png" alt="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/2.png" width="100%" /><img src="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/3.png" alt="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/3.png" width="100%" /><img src="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/4.png" alt="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/4.png" width="100%" />

#### 小圣杯模块

<img src="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/5.png" alt="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/5.png" width="100%" /><img src="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/6.png" alt="https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Static@master/data/screenshot/3.10.0/6.png" width="100%" />

(被墙看不见图的可以复制 alt 打开)

## Getting Started

** 下载 **

注意, 某个依赖包在淘宝源里面 404, 要切换为 npm 官方源

```bash
npm config set registry https://registry.npmjs.org
```

国内环境, 首次下载包有可能会异常地慢

```bash
git clone https://github.com/czy0729/Bangumi
cd ./Bangumi
npm install // 不推荐使用yarn, 因为后面会魔改node_modules, 使用yarn会被识别并还原
```

** 前置操作, 否则 App 内图标均为问号 **

自定义 Iconfont, 把 assets/iconfont/ 下的目录 `vector-icons` 和 node_modules/@expo/ 下的目录 `vector-icons` 合并 (注意是合并不是替换, 假如不行, 就手动把文件夹下面的 2 个文件, 找到对应的地方替换, 观察文件修改日期是不是变化了), 原理其实就是用自己的字体文件把原有的 AntDesign 字体文件替换掉, 之后引用 Icon.AntDesign .

** 启动 **

```bash
npm start // [iOS] 之后点击在浏览器打开的Expo Developer Tools, 点击 Run on iOS simulator

// or

react-native run-android // [android] 真机 usb 调试
```

本人一直在 mac 环境下开发, iOS 跑 expo 客户端调试, 安卓跑真机 usb 调试. window 用法不详, 也不清楚到底能不能运行, 可以查阅 [Expo](https://github.com/expo/expo) 官方文档. 可以选择同一局域网真机扫码调试, 需先下载 Expo App
