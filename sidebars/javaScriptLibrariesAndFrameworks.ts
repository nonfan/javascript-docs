import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const siderbar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '框架',
      link: {
        type: 'doc',
        id: 'javascript-libraries-and-frameworks/frameworks/index',
      },
      items: [
        {
          type: 'category',
          label: 'React',
          description: '用于构建 Web 和原生交互界面的库。',
          items: [
            'javascript-libraries-and-frameworks/frameworks/react/basic-concepts',
            'javascript-libraries-and-frameworks/frameworks/react/deep-component',
            'javascript-libraries-and-frameworks/frameworks/react/advanced-concepts',
            'javascript-libraries-and-frameworks/frameworks/react/state-management',
            'javascript-libraries-and-frameworks/frameworks/react/performance-optimization',
            'javascript-libraries-and-frameworks/frameworks/react/project-in-action',
          ],
        },
        'javascript-libraries-and-frameworks/frameworks/nextjs',
        'javascript-libraries-and-frameworks/frameworks/vue',
        'javascript-libraries-and-frameworks/frameworks/svelte',
      ],
    },
    {
      type: 'category',
      label: '库',
      items: [
        'javascript-libraries-and-frameworks/libraries/axios',
        'javascript-libraries-and-frameworks/libraries/nprogress',
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
