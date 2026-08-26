---
title: 大模型价格列表
published: 2026-02-08
updated: 2026-08-26
description: 汇总国内外主流大模型（阿里、DeepSeek、OpenAI、Gemini等）的API定价。
image: "api"
tags:
  - 随笔
category: 随笔
draft: false
lang: "zh-CN"
licenseName: "CC BY-NC-SA 4.0"
---

汇总了一些国内外大语言模型（LLM）的 API 定价信息。仅供参考。

## 国内大模型

**更新时间：2026-08-26**
**(单位统一为元/1M Tokens)**

### 百度 (Baidu)

> 数据来源：[百度智能云千帆大模型平台](https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya)（原价单位：元/千 Tokens）

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **ERNIE 5.1** | 4 (≤32k)<br>6 (>32k) | 18 (≤32k)<br>22 (>32k) | |
| **ERNIE 5.0**<br>*(Thinking-Preview/Latest/Exp)* | 6 (≤32k)<br>10 (>32k) | 24 (≤32k)<br>40 (>32k) | |
| **ERNIE 4.5 Turbo** | 0.8 | 3.2 | 缓存命中: 0.2<br>批量: 0.32 / 1.28 |
| **ERNIE 4.5 Turbo VL**<br>*(视觉)* | 3 | 9 | 缓存命中: 0.75 |

> 联网搜索：0.004 元/次

### 阿里云 (Aliyun)

> 数据来源：[阿里云百炼模型价格](https://help.aliyun.com/zh/model-studio/model-pricing) | [上下文缓存说明](https://help.aliyun.com/zh/model-studio/context-cache)

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **Qwen 3.8 Max**<br>*(qwen3.8-max)* | 12 | 36 | Batch 半价，上下文缓存有折扣 |
| **Qwen 3.7 Max**<br>*(qwen3.7-max)* | 12 | 36 | 当前限时 5 折 |
| **Qwen 3.6 Max Preview**<br>*(qwen3.6-max-preview)* | 9 (≤128K)<br>15 (≤256K) | 54 (≤128K)<br>90 (≤256K) | Batch 调用半价 |
| **Qwen 3.7 Plus**<br>*(qwen3.7-plus)* | 2 (≤256K)<br>6 (≤1M) | 8 (≤256K)<br>24 (≤1M) | 当前限时 8 折 |
| **Qwen 3.7 Flash**<br>*(qwen3.7-flash)* | 0.2 (≤1M)<br>0.6 (≤32K) | 0.8 (≤1M)<br>2.4 (≤32K) |  |

> **上下文缓存说明：** 阿里云支持显式缓存和隐式缓存两种模式，互斥，单次请求只能应用其中一种。
> - **显式缓存**：需在 messages 中添加 `cache_control` 标记启用。创建缓存按输入标准价 125% 计费，命中按 10% 计费，有效期 5 分钟（命中刷新）。
> - **隐式缓存**：自动模式，无需配置。系统基于前缀匹配自动缓存，创建不额外收费，命中按 20% 计费，有效期由系统管理。

### 智谱AI (ZhipuAI)

> 数据来源：[智谱AI开放平台](https://bigmodel.cn/pricing)

**文本模型**

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **GLM-5.3** | 8 | 28 | 缓存命中: 2<br>面向复杂软件工程与长程 Agent 任务 |
| **GLM-5.2** | 8 | 28 | 缓存命中: 2 |
| **GLM-5.1** | 6 (≤32k)<br>8 (>32k) | 24 (≤32k)<br>28 (>32k) | 缓存命中: 1.3 / 2 |
| **GLM-5-Turbo** | 5 (≤32k)<br>7 (>32k) | 22 (≤32k)<br>26 (>32k) | 缓存命中: 1.2 / 1.8 |
| **GLM-5** | 4 (≤32k)<br>6 (>32k) | 18 (≤32k)<br>22 (>32k) | 缓存命中: 1 / 1.5 |
| **GLM-4.7** | 2 (≤32k, 短输出)<br>3 (≤32k, 长输出)<br>4 (>32k) | 8 (≤32k, 短输出)<br>14 (≤32k, 长输出)<br>16 (>32k) | 短输出: <0.2k<br>长输出: ≥0.2k<br>缓存命中: 0.4/0.6/0.8 |

**视觉模型**

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **GLM-5V-Turbo** | 5 (≤32k)<br>7 (>32k) | 22 (≤32k)<br>26 (>32k) | 缓存命中: 1.2 / 1.8 |
| **GLM-4.6V** | 1 (≤32k)<br>2 (≤128k) | 3 (≤32k)<br>6 (≤128k) | 缓存命中: 0.2 / 0.4 |
| **GLM-4.6V-Flash** | 免费 | 免费 | 缓存命中: 免费 |

> 缓存存储限时免费。

### DeepSeek

> 数据来源：[DeepSeek API Docs](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)
> **2026-08 起实行分时段计价**：高峰时段为北京时间周一至周五 9:00-12:00、14:00-18:00（其余为空闲时段），空闲时段价格为高峰时段的一半。

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **DeepSeek-V4-Flash**<br>*(deepseek-v4-flash)* | 空闲: 1.5<br>高峰: 3.0 | 空闲: 4.5<br>高峰: 9.0 | 缓存命中: 0.05 / 0.10<br>上下文 1M，最大输出 384K |
| **DeepSeek-V4-Pro**<br>*(deepseek-v4-pro)* | 空闲: 4.5<br>高峰: 9.0 | 空闲: 13.5<br>高峰: 27.0 | 缓存命中: 0.15 / 0.30<br>上下文 1M，最大输出 384K |
| **DeepSeek-V4-Flash-Vision**<br>*(deepseek-v4-flash-vision-exp)* | 空闲: 1.5<br>高峰: 3.0 | 空闲: 4.5<br>高峰: 9.0 | 视觉模型，图片按 token 计费<br>缓存命中: 0.05 / 0.10 |

> 并发限制：Flash 2500、Pro 500。

### 火山引擎 (Volcengine)

> 数据来源：[火山方舟大模型服务平台](https://www.volcengine.com/docs/82379/1544106)

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **doubao-seed-2.1-pro** | 6 | 30 | 输入缓存命中: 1.2<br>缓存存储: 0.017元/1M/小时 |
| **doubao-seed-2.1-turbo** | 3 | 15 | 输入缓存命中: 0.6<br>缓存存储: 0.017元/1M/小时 |
| **doubao-seed-2.0-pro** | 3.2 (≤32k)<br>4.8 (32k-128k]<br>9.6 (128k-256k] | 16 (≤32k)<br>24 (32k-128k]<br>48 (128k-256k] | 输入缓存命中: 0.64/0.96/1.92<br>缓存存储: 0.017元/1M/小时 |
| **doubao-seed-2.0-lite** | 0.6 (≤32k)<br>0.9 (32k-128k]<br>1.8 (128k-256k] | 3.6 (≤32k)<br>5.4 (32k-128k]<br>10.8 (128k-256k] | 输入缓存命中: 0.12/0.18/0.36<br>缓存存储: 0.017元/1M/小时 |

> **分段计费说明：** 部分模型按输入长度（及输出长度）划分价格区间。例如，请求输入 200k tokens、输出 14k tokens，满足输入长度 (128, 256] 条件，则输入按对应区间单价计费。
> **DeepSeek-V4 调价：** 火山引擎的 deepseek-v4-pro / v4-flash 将于 2026-08-28 起调价，调整后 pro 为 9 / 27 元（缓存命中 0.3），flash 为 3 / 9 元（缓存命中 0.1）。

### MiniMax

> 数据来源：[MiniMax 开放平台](https://platform.minimaxi.com/docs/guides/pricing-paygo)

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **MiniMax-M3** | 4.2 (≤512k)<br>8.4 (>512k) | 16.8 (≤512k)<br>33.6 (>512k) | 永久五折: 2.1 / 4.2 与 8.4 / 16.8<br>缓存读取: 0.84 / 1.68 |
| **MiniMax-M2.7** | 2.1 | 8.4 | 输入缓存命中: 0.42<br>缓存写入: 2.625 |
| **MiniMax-M2.7-highspeed** | 4.2 | 16.8 | 输入缓存命中: 0.42<br>缓存写入: 2.625 |

### 月之暗面 (Moonshot AI)

> 数据来源：[Moonshot AI 开放平台](https://platform.kimi.com/docs/pricing/chat)

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **kimi-k3** | 20 | 100 | 旗舰模型，1M 上下文<br>缓存命中: 2<br>支持推理强度调节 (low/high/max) |
| **kimi-k2.7-code** | 6.50 | 27.00 | 编程模型，256K 上下文<br>缓存命中: 1.30 |
| **kimi-k2.7-code-highspeed** | 13.00 | 54.00 | 高速版，输出约 180-260 Tokens/s<br>缓存命中: 2.60 |
| **kimi-k2.6** | 6.50 | 27.00 | 通用模型，256K 上下文<br>缓存命中: 1.10 |
| **kimi-k2.5** | 4 | 21 | 多模态模型，256K 上下文<br>缓存命中: 0.70 |
| **moonshot-v1-8k** | 2 | 10 | |

## 国外大模型

**更新时间：2026-08-26**
**(单位统一为美元/1M Tokens)**

### OpenAI

> 数据来源：[OpenAI Pricing (Standard)](https://developers.openai.com/api/docs/pricing)
> Short context ≤ 272k tokens，Long context > 272k tokens。无 Long 价格表示仅支持 Short context。
> 另有 Batch / Flex（半价）与 Fast mode（2 倍价）三档模式。

| 模型名称 | 输入 ($) | 缓存输入 ($) | 输出 ($) | 长上下文输入 ($) | 长上下文缓存 ($) | 长上下文输出 ($) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **gpt-5.6-sol** | 4.00 | 0.40 | 20.00 | 8.00 | 0.80 | 30.00 |
| **gpt-5.6-terra** | 2.00 | 0.20 | 12.00 | 4.00 | 0.40 | 18.00 |
| **gpt-5.6-luna** | 0.20 | 0.02 | 1.20 | 0.40 | 0.04 | 1.80 |
| **gpt-5.5** | 5.00 | 0.50 | 30.00 | 10.00 | 1.00 | 45.00 |
| **gpt-5.5-pro** | 30.00 | — | 180.00 | 60.00 | — | 270.00 |
| **gpt-5.4-mini** | 0.75 | 0.075 | 4.50 | — | — | — |
| **gpt-5.3-codex** | 1.75 | 0.175 | 14.00 | — | — | — |

### Anthropic (Claude)

> 数据来源：[Claude Pricing](https://platform.claude.com/docs/zh-CN/about-claude/pricing)

| 模型名称 | 基础输入 ($/1M) | 5m 缓存写入 ($/1M) | 1h 缓存写入 ($/1M) | 缓存读取 ($/1M) | 输出 ($/1M) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Claude Fable 5** | 10.00 | 12.50 | 20.00 | 1.00 | 50.00 |
| **Claude Mythos 5**<br>*(限量供应)* | 10.00 | 12.50 | 20.00 | 1.00 | 50.00 |
| **Claude Opus 5** | 5.00 | 6.25 | 10.00 | 0.50 | 25.00 |
| **Claude Sonnet 5** | 2.00 | 2.50 | 4.00 | 0.20 | 10.00 |
| **Claude Sonnet 4.6** | 3.00 | 3.75 | 6.00 | 0.30 | 15.00 |
| **Claude Haiku 4.5** | 1.00 | 1.25 | 2.00 | 0.10 | 5.00 |

> **提示缓存说明：** 提示缓存通过重用之前处理过的提示部分来降低成本和延迟。
> - **自动缓存**：在请求顶层添加 `cache_control` 字段，系统自动管理缓存断点。
> - **显式缓存断点**：将 `cache_control` 放在单个内容块上，精细控制缓存内容。
>
> 缓存写入令牌在内容首次存储时收费；缓存读取在后续请求检索缓存内容时收费。
>
> **版本说明：** Claude Sonnet 5 较 4.x（$3/$15）降价约 33%。Opus 4.5/4.6/4.7 与 Sonnet 4.5 价格保持不变，Opus 4.1/4、Sonnet 4、Haiku 3.5 已停用（Bedrock/Google Cloud 除外）。

### Google (Gemini)

> 数据来源：[Gemini API Pricing](https://ai.google.dev/gemini-api/docs/pricing?hl=zh-cn)
> 以下为"标准"档价格，另有 Batch / Flex（半价）与优先级（约 1.8 倍）档位。

| 模型名称 | 输入价格 ($/1M Tokens) | 输出价格 ($/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **Gemini 3.6 Flash**<br>*(gemini-3.6-flash)* | 1.50 | 7.50 | 输入缓存命中: 0.15<br>缓存存储: 1.00/1M/小时 |
| **Gemini 3.5 Flash**<br>*(gemini-3.5-flash)* | 1.50 | 9.00 | 输入缓存命中: 0.15<br>缓存存储: 1.00/1M/小时 |
| **Gemini 3.5 Flash-Lite**<br>*(gemini-3.5-flash-lite)* | 0.30 | 2.50 | |
| **Gemini 3.1 Flash-Lite**<br>*(gemini-3.1-flash-lite)* | 0.25 (文本/图片/视频)<br>0.50 (音频) | 1.50 | |
| **Gemini 2.5 Pro**<br>*(gemini-2.5-pro)* | 1.25 (≤200k)<br>2.50 (>200k) | 10.00 (≤200k)<br>15.00 (>200k) | 输入缓存命中: 0.125 / 0.25<br>缓存存储: 4.50/1M/小时 |
| **Gemini 2.5 Flash**<br>*(gemini-2.5-flash)* | 0.30 (文本/图片/视频)<br>1.00 (音频) | 2.50 | 输入缓存命中: 0.03 (文本/图片/视频) / 0.10 (音频)<br>缓存存储: 1.00/1M/小时 |
