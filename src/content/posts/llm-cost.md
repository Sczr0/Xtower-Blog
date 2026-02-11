---
title: 大模型价格列表
published: 2026-02-08
description: 汇总国内外主流大模型（阿里、DeepSeek、OpenAI、Gemini等）的API定价。
image: ""
tags:
  - 随笔
category: 随笔
draft: false
lang: "zh-CN"
licenseName: "CC BY-NC-SA 4.0"
---

汇总了一些国内外大语言模型（LLM）的 API 定价信息。仅供参考：

## 国内大模型

**更新时间：2026-02-12**
**(单位统一为元/1M Tokens)**

### 百度 (Baidu)

> 数据来源：[百度智能云千帆大模型平台](https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya)

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **ERNIE 5.0**<br>*(Thinking-Preview/Latest/Exp)* | 6 (≤32k)<br>10 (>32k) | 24 (≤32k)<br>40 (>32k) | |
| **ERNIE 4.5 Turbo VL**<br>*(Preview/Latest/32K)* | 3 | 9 | 输入缓存命中: 0.75 |
| **ERNIE 4.5**<br>*(ERNIE-4.5-8K)* | 4 | 16 | 搜索增强: 0.004元/次 |
| **ERNIE 4.5**<br>*(VL-28B-A3B)* | 1 | 4 | |
| **ERNIE 4.5**<br>*(21B-A3B / Thinking)* | 0.5 | 2 | |
| **ERNIE 4.5**<br>*(0.3B)* | 0.1 | 0.4 | |
| **ERNIE 4.5 Turbo**<br>*(128K Preview/Latest)* | 0.8 | 3.2 | 输入缓存命中: 0.2<br>搜索增强: 0.004元/次 |
| **ERNIE 4.5 Turbo**<br>*(32K)* | 0.8 | 3.2 | 输入缓存命中: 0.2 |

### 阿里云 (Aliyun)

> 数据来源：[阿里云百炼模型价格](https://help.aliyun.com/zh/model-studio/model-pricing) | [上下文缓存说明](https://help.aliyun.com/zh/model-studio/context-cache)

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **Qwen-Max**<br>*(qwen3-max)* | 2.5 (≤32k)<br>4 (≤128k)<br>7 (≤252k) | 10 (≤32k)<br>16 (≤128k)<br>28 (≤252k) | Batch调用半价<br>输入缓存命中: 20%(隐式)/10%(显式) |
| **Qwen-Max**<br>*(qwen-max-latest)* | 2.4 | 9.6 | Batch调用半价<br>输入缓存命中: 20%(隐式)/10%(显式) |
| **Qwen-Plus**<br>*(qwen-plus-latest)* | 0.8 (≤128k)<br>2.4 (≤256k)<br>4.8 (≤1M) | 2 (≤128k)<br>20 (≤256k)<br>48 (≤1M) | Batch调用半价<br>输入缓存命中: 20%(隐式)/10%(显式) |

### 智谱AI (ZhipuAI)

> 数据来源：[智谱AI开放平台](https://bigmodel.cn/pricing)

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **GLM-5** | 4 (≤32k)<br>6 (>32k) | 18 (≤32k)<br>22 (>32k) | 输入缓存命中: 1 / 1.5 |
| **GLM-5-Code** | 6 (≤32k)<br>8 (>32k) | 28 (≤32k)<br>32 (>32k) | 输入缓存命中: 1.5 / 2 |
| **GLM-4.7** | 2 (≤32k, 短输出)<br>3 (≤32k, 长输出)<br>4 (>32k) | 8 (≤32k, 短输出)<br>14 (≤32k, 长输出)<br>16 (>32k) | 短输出: <0.2k<br>长输出: ≥0.2k<br>输入缓存命中: 0.4/0.6/0.8 |
| **GLM-4.6** | 2 (≤32k, 短输出)<br>3 (≤32k, 长输出)<br>4 (>32k) | 8 (≤32k, 短输出)<br>14 (≤32k, 长输出)<br>16 (>32k) | 短输出: <0.2k<br>长输出: ≥0.2k<br>输入缓存命中: 0.4/0.6/0.8 |
| **GLM-4.6V** | 1 (≤32k)<br>2 (32k-128k) | 3 (≤32k)<br>6 (32k-128k) | 输入缓存命中: 0.2/0.4 |
| **GLM-4.7-FlashX** | 0.5 | 3 | 输入缓存命中: 0.1 |
| **GLM-4.7-Flash** | 免费 | 免费 | 输入缓存命中: 免费 |

### DeepSeek

> 数据来源：[DeepSeek API Docs](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **DeepSeek-V3.2**<br>*(deepseek-chat/deepseek-reasoner)* | 2 | 3 | 输入缓存命中: 0.2 |

### 火山引擎 (Volcengine)

> 数据来源：[火山方舟大模型服务平台](https://www.volcengine.com/docs/82379/1544106)

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **doubao-seed-1.8** | 0.8 (≤32k)<br>1.2 (32k-128k]<br>2.4 (128k-256k] | 2 (≤32k, 短输出)<br>8 (≤32k, 长输出)<br>16 (32k-128k]<br>24 (128k-256k] | 短输出: ≤0.2k<br>长输出: >0.2k<br>输入缓存命中: 0.16<br>缓存存储: 0.017元/1M/小时 |
| **doubao-seed-code** | 1.2 (≤32k)<br>1.4 (32k-128k]<br>2.8 (128k-256k] | 8 (≤32k)<br>12 (32k-128k]<br>16 (128k-256k] | 输入缓存命中: 0.24<br>缓存存储: 0.017元/1M/小时 |
| **doubao-seed-1.6** | 0.8 (≤32k)<br>1.2 (32k-128k]<br>2.4 (128k-256k] | 2 (≤32k, 短输出)<br>8 (≤32k, 长输出)<br>16 (32k-128k]<br>24 (128k-256k] | 短输出: ≤0.2k<br>长输出: >0.2k<br>输入缓存命中: 0.16<br>缓存存储: 0.017元/1M/小时 |
| **doubao-seed-1.6-lite** | 0.3 (≤32k)<br>0.6 (32k-128k]<br>1.2 (128k-256k] | 0.6 (≤32k, 短输出)<br>2.4 (≤32k, 长输出)<br>4 (32k-128k]<br>12 (128k-256k] | 短输出: ≤0.2k<br>长输出: >0.2k<br>输入缓存命中: 0.06<br>缓存存储: 0.017元/1M/小时 |
| **doubao-seed-1.6-flash** | 0.15 (≤32k)<br>0.3 (32k-128k]<br>0.6 (128k-256k] | 1.5 (≤32k)<br>3 (32k-128k]<br>6 (128k-256k] | 输入缓存命中: 0.03<br>缓存存储: 0.017元/1M/小时 |
| **doubao-seed-1.6-vision** | 0.8 (≤32k)<br>1.2 (32k-128k]<br>2.4 (128k-256k] | 8 (≤32k)<br>16 (32k-128k]<br>24 (128k-256k] | 输入缓存命中: 0.16<br>缓存存储: 0.017元/1M/小时 |
| **doubao-seed-1.6-thinking** | 0.8 (≤32k)<br>1.2 (32k-128k]<br>2.4 (128k-256k] | 8 (≤32k)<br>16 (32k-128k]<br>24 (128k-256k] | 缓存命中: 0.16<br>缓存存储: 0.017元/1M/小时 |

### MiniMax

> 数据来源：[MiniMax 开放平台](https://platform.minimaxi.com/docs/guides/pricing-paygo)

| 模型名称 | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **MiniMax-M2.1** | 2.1 | 8.4 | 输入缓存命中: 0.21<br>缓存写入: 2.625 |
| **MiniMax-M2.1-lightning** | 2.1 | 16.8 | 输入缓存命中: 0.21<br>缓存写入: 2.625 |
| **MiniMax-M2** | 2.1 | 8.4 | 输入缓存命中: 0.21<br>缓存写入: 2.625 |
| **M2-her** | 2.1 | 8.4 | |

### 月之暗面 (Moonshot AI)

> 数据来源：[Moonshot AI 开放平台](https://platform.moonshot.cn/docs/pricing/chat)

| 模型名称                                          | 输入价格 (元/1M Tokens) | 输出价格 (元/1M Tokens) | 说明        |
| :-------------------------------------------- | :----------------- | :----------------- | :-------- |
| **kimi-k2.5**                                 | 4                  | 21                 | 缓存命中: 0.7 |
| **kimi-k2**<br>*(0905/0711/thinking)*         | 4                  | 16                 | 缓存命中: 1   |
| **kimi-k2-turbo**<br>*(turbo/thinking-turbo)* | 8                  | 58                 | 缓存命中: 1   |
| **moonshot-v1-8k**                            | 2                  | 10                 |           |
| **moonshot-v1-32k**                           | 5                  | 20                 |           |
| **moonshot-v1-128k**                          | 10                 | 30                 |           |

## 国外大模型


**更新时间：2026-02-08**
**(单位统一为美元/1M Tokens)**

### OpenAI

> 数据来源：[OpenAI Pricing (Standard) ](https://platform.openai.com/docs/pricing?latest-pricing=standard)

| 模型名称 | 输入价格 ($/1M Tokens) | 输出价格 ($/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **gpt-5.2** | 1.75 | 14.00 | 缓存命中: 0.175 |
| **gpt-5.2-chat-latest** | 1.75 | 14.00 | 缓存命中: 0.175 |
| **gpt-5.2-codex** | 1.75 | 14.00 | 缓存命中: 0.175 |
| **gpt-5.2-pro** | 21.00 | 168.00 | |
| **gpt-5.1-chat-latest** | 1.25 | 10.00 | 缓存命中: 0.125 |
| **gpt-5.1-codex-max** | 1.25 | 10.00 | 缓存命中: 0.125 |
| **gpt-5-chat-latest** | 1.25 | 10.00 | 缓存命中: 0.125 |
| **gpt-4o** | 2.50 | 10.00 | 缓存命中: 1.25 |

### Anthropic (Claude)

> 数据来源：[Claude Pricing](https://platform.claude.com/docs/zh-CN/about-claude/pricing)

| 模型名称 | 输入价格 ($/1M Tokens) | 输出价格 ($/1M Tokens) | 说明 |
| :--- | :--- | :--- | :--- |
| **Claude Opus 4.6** | 5.00 | 25.00 | 缓存写入: 6.25 (5m) / 10.00 (1h)<br>输入缓存命中: 0.50 |
| **Claude Sonnet 4.5** | 3.00 | 15.00 | 缓存写入: 3.75 (5m) / 6.00 (1h)<br>输入缓存命中: 0.30 |
| **Claude Haiku 4.5** | 1.00 | 5.00 | 缓存写入: 1.25 (5m) / 2.00 (1h)<br>输入缓存命中: 0.10 |

### Google (Gemini)

> 数据来源：[Gemini API Pricing](https://ai.google.dev/gemini-api/docs/pricing?hl=zh-cn)

| 模型名称                                  | 输入价格 ($/1M Tokens)           | 输出价格 ($/1M Tokens)             | 说明                                                                                                                                                                               |
| :------------------------------------ | :--------------------------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Gemini 3 Pro**<br>*(preview)*       | 2.00 (≤200k)<br>4.00 (>200k) | 12.00 (≤200k)<br>18.00 (>200k) | 输入缓存命中: 0.20 (≤200k) / 0.40 (>200k)<br>缓存存储: \$4.50/1M/小时                                                                                                                         |
| **Gemini 3 Pro Image**<br>*(preview)* | 2.00                         | 12.00 (文字/思考)<br>120.00 (图片)   | 图片输入: \$0.0011/张<br>图片输出: \$0.134(1k/2k) / \$0.24(4k)                                                                                                                                         |
| **Gemini 3 Flash**<br>*(preview)*     | 0.50                         | 3.00                           | 音频输入: \$1.00<br>输入缓存命中: 0.05 (文本/图片/视频) / 0.10 (音频)<br>缓存存储: \$1.00/1M/小时 |
| **Gemini 2.5 Pro**                    | 1.25 (≤128k)<br>2.50 (>128k) | 5.00 (≤128k)<br>10.00 (>128k)  | 输入缓存命中: 0.31 (≤128k) / 0.63 (>128k)<br>缓存存储: \$3.50/1M/小时                                                                                                                         |
| **Gemini 2.5 Flash**                  | 0.10 (≤128k)<br>0.20 (>128k) | 0.40 (≤128k)<br>0.80 (>128k)   | 输入缓存命中: 0.025 (≤128k) / 0.05 (>128k)<br>缓存存储: \$0.70/1M/小时                                                                                                                        |