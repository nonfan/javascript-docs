import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'index',
    'javascript-in-html',
    'language-basics',
    'collection-reference-type',
    'iterator-and-generator',
    'objects-classes-and-object-oriented-programming',
    'proxy-and-reflection',
    'function',
    {
      type: 'category',
      label: '期约与异步函数',
      items: [
        'promise-and-async-function/async-program',
        'promise-and-async-function/promise',
        'promise-and-async-function/async-function',
      ],
    },
    {
      type: 'category',
      label: 'BOM',
      items: [
        'bom/window',
        'bom/location',
        'bom/navigator',
        'bom/screen',
        'bom/history',
      ],
    },
    'json',
    {
      type: 'category',
      label: '网络请求与远程资源',
      items: [
        'network-requests-and-remote-resources/network-requests',
        'network-requests-and-remote-resources/fetch-api',
        'network-requests-and-remote-resources/beacon-api',
        'network-requests-and-remote-resources/websocket',
      ],
    },
    {
      type: 'category',
      label: '客户端存储',
      items: [
        'client-storage/cookie',
        'client-storage/web-storage',
        'client-storage/indexed-db',
      ],
    },
  ],
  api: ['api/index', 'api/array'],
  'source-code': [
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

export default sidebars;
