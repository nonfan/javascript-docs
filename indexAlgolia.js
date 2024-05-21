const algoliasearch = require('algoliasearch');

fetch('https://dashboard.algolia.com/sample_datasets/movie.json')
  .then(data => data.json())
  .then(records => {
    const client = algoliasearch(
      'TJDGZS0YDF',
      'e02237a6e25396066ab380cdbb49d982',
    );

    const index = client.initIndex('nonfanio');

    index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true });
  })
  .catch(error => {
    console.error(error);
  });
