import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'api/global-object',
    {
      type: 'category',
      label: '基本对象',
      items: ['api/basic-objects/object'],
    },
  ],
};

export default sidebars.docs;
