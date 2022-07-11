export const StringUtility = {
  convertStringToNumber: (str: string) => {
    if (!str) {
      str = "";
    }
    return parseInt(str, 36);
  },
  isNullOrEmpty: (str: string) => {
    return str === undefined || str === null || str === "";
  },
};
