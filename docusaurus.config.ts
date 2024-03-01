import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const username: string = 'agoodbook';
const repo: string = 'javascript';
const title: string = 'JavaScript';

const config: Config = {
  title: title, // 站点名称
  tagline: '书山有路勤为径，学海无涯苦作舟', // slogan，标语
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // 配置网站站点url
  url: `https://agoodbook.github.io/`,
  // 仅agoodbook.github.io仓库使用 '/', 其它仓库页面一律使用 '/<projectName>/'
  baseUrl: `/${repo}`,

  // GitHub部署配置
  organizationName: username, // 用户名
  projectName: repo, // 仓库名
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
      'zh-CN': {
        label: '中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${username}/${repo}/tree/main`,
          showLastUpdateTime: true,
          remarkPlugins: [
            require('remark-math'),
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
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
    themes: ['@docusaurus/theme-search-algolia'],
    algolia: {
      appId: 'X1Z85QJPUV',
      apiKey: 'bf7211c161e8205da2f933a02534105a',
      indexName: 'docusaurus-2',
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: title, // 导航上站点名称
      logo: {
        alt: title, //  站点 logo 文字替换
        src: 'img/logo.svg', //   站点 logo  链接
      },
      items: [
        {
          type: 'search',
          position: 'left',
          className: 'custom-search',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: `https://github.com/${username}/${repo}/issues/3526`,
              label: '帮助我们翻译',
            },
          ],
        },
        {
          href: `https://github.com/${username}/${repo}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} AGoodBook.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'javascript',
      additionalLanguages: ['json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
