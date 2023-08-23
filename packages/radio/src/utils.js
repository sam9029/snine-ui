// 随机生成group name字段
export const generateRandomStr = () => {
  let name = Math.random().toString(36).slice(2);
  return name;
};