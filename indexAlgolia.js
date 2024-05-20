const algoliasearch = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
require('dotenv').config(); // 加载环境变量

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_API_KEY,
);
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

const docsDir = path.join(__dirname, 'docs');

const docs = [];

// 递归读取所有文档文件
function readDocs(dir) {
  console.log(`Reading directory: ${dir}`);
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      readDocs(fullPath);
    } else if (['.md', '.mdx'].includes(path.extname(fullPath))) {
      console.log(`Reading file: ${fullPath}`);
      const content = fs.readFileSync(fullPath, 'utf8');
      const { data, content: body } = matter(content);

      console.log(`File content: ${body}`);
      // 仅使用标题和摘要
      const indexObj = {
        objectID: fullPath,
        title: data.title || path.basename(fullPath, path.extname(fullPath)),
        summary: getSummary(body), // 获取摘要的函数
        url: fullPath.replace(__dirname, ''), // 修改为实际URL
      };
      docs.push(indexObj);
    }
  });
}

// 获取摘要的函数，可以根据需要进行调整
function getSummary(body) {
  // 这里简单地截取前几个段落作为摘要
  const paragraphs = body.split('\n').filter(para => para.trim() !== '');
  const summary = paragraphs.slice(0, 3).join(' '); // 截取前三个段落
  return summary;
}

readDocs(docsDir);

console.log('Documents to be indexed:', docs);

index
  .saveObjects(docs)
  .then(({ objectIDs }) => {
    console.log('Documents indexed:', objectIDs);
  })
  .catch(err => {
    console.error('Error indexing documents:', err);
  });
