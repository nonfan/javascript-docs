import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const siderbar: SidebarsConfig = {
  docs: [
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

export default siderbar.docs;
