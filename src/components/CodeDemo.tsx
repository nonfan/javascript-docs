import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useState, useEffect } from 'react';

interface Props {
  filePath: string;
  language?: string;
  title?: string;
}
const CodeDemo = ({ filePath, language = 'javascript', title }: Props) => {
  const [code, setCode] = useState('');
  const path = useBaseUrl(filePath);

  useEffect(() => {
    fetch(path)
      .then(response => {

        // 检查响应状态码是否为 200
        if (!response.ok) {
          throw new Error(`获取文件失败: ${response.status} ${response.statusText}`);
        }

        // 获取内容类型
        const contentType = response.headers.get('content-type');

        // 检查内容类型是否为 JavaScript 文件
        if (!contentType || !contentType.includes('text/plain')) {
          throw new Error(`引入静态文件路径出错: ${filePath}`);
        }

        return response.text()
      })
      .then(data => {
        setCode(data);
      });
  }, [filePath]);

  return (
    <CodeBlock language={language} title={title}>
      {code}
    </CodeBlock>
  );
};

export default CodeDemo;
