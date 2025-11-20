import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
  type: "none", // 当前启用的评论系统类型：none | twikoo | waline | giscus | disqus

  // Twikoo 评论系统配置
  twikoo: {
    envId: "https://twikoo.vercel.app",
    lang: "en",
    visitorCount: true,
  },

  // Waline 评论系统配置
  waline: {
    serverURL: "https://waline.vercel.app",
    lang: "zh-CN",
    login: "enable",
    visitorCount: true,
  },

  // Giscus 评论系统配置（未验证）
  giscus: {
    repo: "CuteLeaf/Firefly",
    repoId: "R_kgD2gfdFGd",
    category: "General",
    categoryId: "DIC_kwDOKy9HOc4CegmW",
    mapping: "title",
    strict: "0",
    reactionsEnabled: "1",
    emitMetadata: "1",
    inputPosition: "top",
    theme: "light",
    lang: "zh-CN",
    loading: "lazy",
  },

  // Disqus 评论系统配置（未验证）
  disqus: {
    shortname: "firefly",
  },
};
