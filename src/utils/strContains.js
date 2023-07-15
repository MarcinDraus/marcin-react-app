
export const strContains = (str1, str2) => 
  str1.toLowerCase().includes(str2.toLowerCase());

// export const strContains = (str, searchStr) => {
//   const lowercaseStr = str.toLowerCase();
//   const lowercaseSearchStr = searchStr.toLowerCase();
//   console.log(lowercaseStr, 'lowercaseStr');
//   console.log(lowercaseSearchStr, 'lowercaseSearchStr');
//   return lowercaseStr.includes(lowercaseSearchStr);
// };


   export default strContains;