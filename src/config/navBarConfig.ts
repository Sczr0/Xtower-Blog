import type { NavBarConfig } from "../types/config";
import { LinkPreset } from "../types/config";

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    // 支持自定义导航栏链接,并且支持多级菜单
    {
      name: "链接",
      url: "/links/",
      icon: "material-symbols:link",
      children: [
        {
          name: "GitHub",
          url: "https://github.com/CuteLeaf/Firefly",
          external: true,
          icon: "fa6-brands:github",
        },
        {
          name: "Bilibili",
          url: "https://space.bilibili.com/38932988",
          external: true,
          icon: "fa6-brands:bilibili",
        },
      ],
    },
    {
      name: "关于",
      url: "/content/",
      icon: "material-symbols:info",
      children: [LinkPreset.About, LinkPreset.Friends],
    },
  ],
};
