const getRandomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand)
}

const pickRandom = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}

export {getRandomInt, pickRandom}
