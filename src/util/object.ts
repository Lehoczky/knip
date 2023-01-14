// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getValuesByKeyDeep = (obj: any, key: string): unknown[] => {
  const objects = [];
  if (obj && typeof obj === 'object') {
    for (const i in obj) {
      if (obj[i] && typeof obj[i] === 'object') {
        const values = getValuesByKeyDeep(obj[i], key);
        objects.push(...values);
      } else if (i === key) {
        objects.push(obj[i]);
      }
    }
  }
  return objects;
};
