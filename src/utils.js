const getRandomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand)
}

const pickRandom = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}

const generateList = (f, data, count) => {
  let arr = [];
  for (let i=0; i<count; i++) {
    arr.push(f(data))
  }
  return arr;
}

export {getRandomInt, pickRandom, generateList}
