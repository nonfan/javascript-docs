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
          ],
        },
        {
          type: 'category',
          label: 'Express',
          description: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
          items: [
            'javascript-libraries-and-frameworks/frameworks/express/getting-started',
            'javascript-libraries-and-frameworks/frameworks/express/core',
            'javascript-libraries-and-frameworks/frameworks/express/restful-api',
            'javascript-libraries-and-frameworks/frameworks/express/template-engine',
            'javascript-libraries-and-frameworks/frameworks/express/database-integration',
            'javascript-libraries-and-frameworks/frameworks/express/auth',
          ],
        },
      ],
    },
  ],
};

export default siderbar.docs;
