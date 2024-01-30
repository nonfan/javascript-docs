import { Navigations } from "@site/src";
import NextraSvg from "@site/src/assets/icons/NextraSvg";
import StorybookSvg from "@site/src/assets/icons/StorybookSvg";

/**
 * 静态站点生成器
 */
export const StaticSiteGenerator: Navigations = [
  {
    title: "Nextra",
    smallTitle:
      "Nextra 是一个基于 Next.js 的静态站点生成器，专注于构建文档站点。Nextra 的目标是提供简单、易用且灵活的文档生成解决方案。",
    url: "https://agoodbook.github.io/nextra-docs/",
    icon: NextraSvg,
  },
];

/**
 * 前端工具
 */
export const FrontendTools: Navigations = [
  {
    title: "Storybook",
    smallTitle:
      "Storybook 是一个用于开发和测试 React、Vue、Angular 等前端组件的开源工具。它提供了一个独立的开发环境，让开发者能够以组件为单位进行开发、测试和文档编写，同时保持组件与整个应用的解耦。",
    url: "https://agoodbook.github.io/storybook/",
    icon: StorybookSvg,
  },
];
