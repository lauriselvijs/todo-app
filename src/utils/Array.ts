export const reorder = <Type>(
  list: Type[],
  startIndex: number,
  endIndex: number
): Type[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
