import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'source-code/index',
    {
      type: 'category',
      label: 'JavaScript 基础',
      items: ['source-code/javascript-basics/index'],
    },
    {
      type: 'category',
      label: '函数和闭包',
      items: ['source-code/function-closure/index'],
    },
    {
      type: 'category',
      label: '面向对象编程',
      items: ['source-code/object-oriented-programming/index'],
    },
    {
      type: 'category',
      label: '异步编程',
      items: ['source-code/asynchronous-programming/index'],
    },
    {
      type: 'category',
      label: 'JavaScript 引擎与解析器',
      items: ['source-code/javascript-engine-and-parser/index'],
    },
    {
      type: 'category',
      label: '标准库与核心 API',
      items: ['source-code/standard-library-and-core-api/index'],
    },
    {
      type: 'category',
      label: 'Web API 与 DOM 操作',
      items: ['source-code/web-api-and-dom-manipulation/index'],
    },
    {
      type: 'category',
      label: '模块化与工具库',
      items: ['source-code/modularity-and-tool-libraries/index'],
    },
  ],
};

export default sidebars.docs;
