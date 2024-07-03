import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'api/global-object',
    {
      type: 'category',
      label: '基本对象',
      items: [
        'api/basic-objects/object',
        'api/basic-objects/function',
        'api/basic-objects/boolean',
        'api/basic-objects/symbol',
      ],
    },
    {
      type: 'category',
      label: '数值和日期对象',
      items: [
        'api/number-and-date-objects/number',
        'api/number-and-date-objects/math',
        'api/number-and-date-objects/date',
      ],
    },
  ],
};

export default sidebars.docs;
