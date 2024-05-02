export const pureSort = <T>(array: readonly T[]): T[] => {
  const deepCopied = [...array];
  return deepCopied.sort();
};
