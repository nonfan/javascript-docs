export const username: string = 'nonfan';
export const repository: string = 'javascript-docs';
export const title: string = 'JavaScript';
export const logoSrc: string = './images/logoDark.svg';
export const logoSrcDark: string = './images/logo.svg';
export const favicon: string = './images/favicon.png';

export const algolia = {
  appId: 'TJDGZS0YDF',
  apiKey: '0e9dcbffe637972ccd07915e4c776d88',
  indexName: 'nonfanio',
  searchParameters: {
    facetFilters: ['language:zh-CN', 'version:current'],
  },
  contextualSearch: false,
};
