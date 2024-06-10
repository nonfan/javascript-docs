import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeKatex from 'rehype-katex';

const username: string = 'nonfan';
const repo: string = 'javascript-docs';
const title: string = 'JavaScript';
const logoImageSrc: string = './images/logo.png';
const favicon: string = './images/favicon.ico';

const config: Config = {
  title,
  favicon,
  trailingSlash: true,

  // 配置网站站点url
  url: `https://${username}.github.io/`,
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
          showLastUpdateTime: false,
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
    algolia: {
      appId: 'TJDGZS0YDF',
      apiKey: '0e9dcbffe637972ccd07915e4c776d88',
      indexName: 'nonfanio',
    },
    navbar: {
      title: title, // 导航上站点名称
      logo: {
        alt: title, //  站点 logo 文字替换
        src: logoImageSrc, //   站点 logo  链接
        srcDark: logoImageSrc,
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'api',
          label: 'API',
        },
        // {
        //   type: 'search',
        //   position: 'left',
        //   className: 'custom-search',
        // },

        {
          href: `https://github.com/${username}/${repo}`,
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © 2024 by Nonfan. Licensed under CC BY-NC 4.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'javascript',
      additionalLanguages: ['json'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'highlight-error',
          block: {
            start: 'highlight-error-start',
            end: 'highlight-error-end',
          },
        },
        {
          className: 'code-block-success-line',
          line: 'highlight-success',
          block: {
            start: 'highlight-success-start',
            end: 'highlight-success-end',
          },
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
