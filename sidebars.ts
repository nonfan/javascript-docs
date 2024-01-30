import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "doc",
      id: "started",
      label: "介绍",
    },
    {
      type: "doc",
      id: "guide",
      label: "指南",
    },
    {
      type: "doc",
      id: "actions",
      label: "Actions自动化",
    },
    {
      type: "category",
      label: "前端插件库",
      collapsed: false,
      link: {
        type: "generated-index", // 生成菜单列表
      },
      items: [
        { id: "plugin-library/nprogress", label: "进度条", type: "doc" },
        "plugin-library/rich-text-editor",
      ],
    },
  ],
};

export default sidebars;
