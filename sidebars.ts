import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'index',
    'javascript-in-html',
    'language-basics',
    'variables-scope-and-memory',
    'basic-reference-types',
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
    'bom',
    'dom',
    'dom-extensions',
    'dom2-and-dom3',
    'events',
    'animation-and-canvas-graphics',
    'form-scripts',
    {
      type: 'category',
      label: 'Web API',
      link: {
        type: 'doc',
        id: 'web-api/index',
      },
      items: [
        'web-api/atomics-and-shared-array-buffer',
        'web-api/cross-context-messaging',
        'web-api/encoding-api',
        'web-api/file-api-and-blob-api',
        'web-api/native-drag-and-drop',
        'web-api/media-element',
        'web-api/notifications-api',
        'web-api/page-visibility-api',
        'web-api/streams-api',
        'web-api/timing-api',
        'web-api/web-components',
        'web-api/web-cryptography-api',
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
    'client-detection',
    'worker-thread',
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
  'javaScript-libraries-and-frameworks': [
    'javascript-libraries-and-frameworks/index',
    {
      type: 'category',
      label: '框架',
      items: [
        'javascript-libraries-and-frameworks/frameworks/react',
        'javascript-libraries-and-frameworks/frameworks/vue',
        'javascript-libraries-and-frameworks/frameworks/svelte',
      ],
    },
    {
      type: 'category',
      label: '库',
      items: [
        'javascript-libraries-and-frameworks/libraries/axios',
        'javascript-libraries-and-frameworks/libraries/lodash',
        'javascript-libraries-and-frameworks/libraries/moment',
      ],
    },
    {
      type: 'category',
      label: '工具',
      items: [
        'javascript-libraries-and-frameworks/tools/webpack',
        'javascript-libraries-and-frameworks/tools/babel',
        'javascript-libraries-and-frameworks/tools/rollup',
      ],
    },
  ],
};

export default sidebars;
