import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      label: '起步',
      id: 'index',
    },
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
      label: '客户端存储',
      items: [
        'client-storage/cookie',
        'client-storage/web-storage',
        'client-storage/indexed-db',
      ],
    },
  ],
};

export default sidebars;
