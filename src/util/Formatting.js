export const truncateStr = (str, len) => {
  if (str.trim().length <= len) {
    return str.trim();
  }
  let cleanStr = str.slice(0, len - 3).trim();
  cleanStr =  cleanStr.slice(0, cleanStr.length - 1) +
              cleanStr.slice(cleanStr.length -1).replace(/[^a-z]/i, '');

  return `${cleanStr.trim()}...`;
};
