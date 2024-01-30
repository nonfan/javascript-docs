function getRandomElements(arr: any[], num: number) {
  // 复制数组，以避免修改原始数组
  const shuffledArray = arr.slice();

  // 使用 Fisher-Yates 算法对数组进行随机排序
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // 截取数组的前 num 个元素
  return shuffledArray.slice(0, num);
}

export { getRandomElements };
