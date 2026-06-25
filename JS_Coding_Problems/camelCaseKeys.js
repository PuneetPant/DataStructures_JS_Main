const camelCaseKeys = (obj) => {
  const copyObj = {};
  Object.keys(obj).forEach((key) => {
    let newKey = key.split("_").join("");
    if (typeof obj[key] !== "undefined") {
      copyObj[newKey] = obj[key];
    } else {
      copyObj[newKey] = camelCaseKeys(obj[key]);
    }
  });
  return copyObj;
};
