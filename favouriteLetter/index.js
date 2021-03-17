// function which will take any string (sentence) and tell you which letter you used the most!
// for example ourFunction("The weather today is nice") should return { favoriteLetter: "e", count: 4 }

const ourFunction = (str) => {
  // split each letter and count freqency of each letter
  const data = str.toLowerCase().replaceAll(" ", "").split("");

  const countNum = data.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

  let letter;
  let max = 0;
  for (const key in countNum) {
    if (countNum[key] > max) {
      max = countNum[key];
      letter = key;
    }
  }
  return `{ favouriteLetter: "${letter}", count: ${max}}`;
};

console.log(ourFunction("The weather today is nice"));
