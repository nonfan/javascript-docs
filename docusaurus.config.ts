import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
const username: string = "agoodbook";
const repo: string = "agoodbook.github.io";
let config: Config;
config = {
  title: "AGoodBook", // 站点名称
  tagline: "书山有路勤为径，学海无涯苦作舟", // slogan，标语
  favicon: "img/favicon.ico",
  trailingSlash: true,

  // 配置网站站点url
  url: `https://agoodbook.github.io/`,
  // 仅agoodbook.github.io仓库使用 '/', 其它仓库页面一律使用 '/<projectName>/'
  baseUrl: "/",

  // GitHub部署配置
  organizationName: username, // 用户名
  projectName: repo, // 仓库名
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  plugins: ["docusaurus-plugin-sass"],
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en",
      },
      "zh-CN": {
        label: "中文",
        direction: "ltr",
        htmlLang: "zh-CN",
      },
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `https://github.com/${username}/${repo}/tree/main`,
          lastVersion: "current",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          versions: {
            current: {
              label: "5.x",
            },
            "4.0.0": {
              label: "4.0.0",
              path: "4.0.0",
              banner: "none",
            },
            "3.0.0": {
              label: "3.0.0",
              path: "3.0.0",
              banner: "none",
            },
            "2.0.0": {
              label: "2.0.0",
              path: "2.0.0",
              banner: "none",
            },
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    versions: {
      "2.0.0": "versioned_docs/version-2.0.0",
      "3.0.0": "versioned_docs/version-3.0.0",
      "4.0.0": "versioned_docs/version-4.0.0",
      "5.0.0": "docs",
      // 添加更多版本...
    },
    themes: ["@docusaurus/theme-search-algolia"],
    algolia: {
      appId: "X1Z85QJPUV",
      apiKey: "bf7211c161e8205da2f933a02534105a",
      indexName: "docusaurus-2",
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "AGoodBook", // 导航上站点名称
      logo: {
        alt: "AGoodBook", //  站点 logo 文字替换
        src: "img/logo.svg", //   站点 logo  链接
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "started",
          label: "文档",
        },
        { to: "docs/frontend", label: "前端", position: "left" },
        { to: "docs/backend", label: "后端", position: "left" },
        { to: "docs/full-stack", label: "全栈", position: "left" },
        {
          type: "search",
          position: "left",
          className: "custom-search",
        },
        {
          type: "html",
          position: "right",
          value: `
          <button>Give Feedback</button>
          <form class="send-container">
            <div class="email">
              <input id="feedback-email" type="email" placeholder="您的邮箱"/>
            </div>
            <div class="content">
              <textarea id="feedback-content" placeholder="您反馈什么?"></textarea>
            </div>
            <div class="tips"></div>
            <footer>
              <div class="emoji-container">
                <img src="/icons/happy.svg" data-emoji="happy" width="24" height="24" alt="happy"/>
                <img src="/icons/normal.svg" data-emoji="normal" width="24" height="24" alt="normal"/>
                <img src="/icons/sad.svg" data-emoji="sad" width="24" height="24" alt="sad"/>
                <img src="/icons/angry.svg" data-emoji="angry" width="24" height="24" alt="angry"/>
              </div>
              <button class="send-btn" onclick="event.preventDefault()">发送</button>
            </footer>
          </form>
          `,
          className: "custom-feedback",
        },
        //   right
        { to: "docs/up-projects", label: "创意工坊", position: "right" },
        { to: "docs/storeroom", label: "杂物库", position: "right" },

        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: `https://github.com/${username}/${repo}/issues/3526`,
              label: "帮助我们翻译",
            },
          ],
        },
        {
          href: `https://github.com/${username}/${repo}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} AGoodBook.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
