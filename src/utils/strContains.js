export const strContains = (str, searchStr) => {
    const lowercaseStr = str.toLowerCase();
    const lowercaseSearchStr = searchStr.toLowerCase();
    return lowercaseStr.includes(lowercaseSearchStr);
  };

  export default strContains;