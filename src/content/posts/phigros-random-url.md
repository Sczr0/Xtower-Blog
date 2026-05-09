---
title: 利用Cloudflare Origin Rules实现无计费的随机URL
published: 2026-01-21
updated: 2026-05-09
description: 做一个随机图不是很困难，但是整活就有点困难了...
image: ""
tags:
  - 随笔
category: 随笔
draft: false
lang: ""
---

#### 起因

起因是这里：

https://blog.acofork.com/posts/random-url-gen/#%E5%A5%87%E6%8A%80%E6%B7%AB%E5%B7%A71%E5%88%A9%E7%94%A8cloudflare-origin-rules%E5%AE%9E%E7%8E%B0%E6%97%A0%E8%AE%A1%E8%B4%B9%E7%9A%84%E9%9A%8F%E6%9C%BAurl

> “Cloudflare在规则提供一个方法，该方法可以在规则层生成一个UUID，而UUID每次都是随机的，我们可以依据此来在规则层做随机URL”

正好我有一个现成的静态资源站：
https://somnia.xtower.site

说干就干

#### 折腾一番

但是上手我才发现，我没法完全照抄作业

https://github.com/afoim/cf-rule-random-url/edit/main/README.md 提供的方法是先将图片重命名为十六进制哈希文件名，也就是说，我需要再存一份图片的副本。

虽然我手头的曲绘目前就 298 张（伏笔）但我并不想在资源站平白无故的再存一遍。

那怎么办呢，经过询问Gemini，Gemini提出了_redirects，该文件可以在Cloudflare Pages内部设置重定向规则。

重定向问题解决了，另一个问题又出来了：

两位十六进制文件名只有 256 种可能，但是我有 298 张图片，
如果单纯扩充到三位，就需要写4096条重定向规则，相当爆炸。

#### 转折

我再次求助Gemini，Gemini提出了双桶方案，即创建 **两个分组（Group 1 和 Group 2）**，一个/1/00.jpg，另一个/2/00.jpg

最终的生成脚本：

https://github.com/Sczr0/somnia-xtower/blob/main/generate_index.py

访问的问题解决了，下一步就是设置 **Transform Rules** 了，这里省略中间奇奇怪怪的尝试过程。

免费版套餐不支持 matches 正则表达式来做复杂的匹配，uuidv4 也只能用一次，且不能嵌套，所以使用了 cf.ray_id lt "e" + 多条规则，相当别扭

![这是第一条](/assets/images/random-1.png)

![这是第二条](/assets/images/random-2.png)

效果：
https://random.xtower.site/ill