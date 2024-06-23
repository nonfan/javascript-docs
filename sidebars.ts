import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import allSidebar from './sidebars/index';

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
    'client-detection',
    {
      type: 'category',
      label: '深入了解 DOM',
      items: [
        'dom-group/dom',
        'dom-group/dom2-and-dom3',
        'dom-group/dom-extensions',
      ],
    },
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
    'error-handling-and-debugging',
    'processing-xml',
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
    'modules',
    'worker-thread',
    'best-practices',
    'strict-mode',
  ],
  ...allSidebar,
};

export default sidebars;
