const LOREM_IPSUM = require("./loremIpsum");

const spawnImages = countDimentions => numOfImages => {
  return [...new Array(numOfImages)].map((_, i) => {
    const { width, height } = countDimentions(i);
    return {
      width,
      height,
      src: `https://picsum.photos/${width}/${height}`
    };
  });
};

const spawnRandomImages = spawnImages(getRandomDimentions);
const spawnTeaserImages = spawnImages(getTeaserDimentions);

function getRandomDimentions() {
  return {
    width: 500 + Math.floor(Math.random() * 300),
    height: 500
  };
}

function getTeaserDimentions(i) {
  return {
    width: 500 + i,
    height: 350 + i
  };
}

function capitalizeFirsLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getArticle = gallerySize => [{ type: "text", data: LOREM_IPSUM }, { type: "text", data: LOREM_IPSUM }, { type: "gallery", data: spawnRandomImages(gallerySize) }, { type: "text", data: LOREM_IPSUM }];

const LOREM_WORDS = LOREM_IPSUM.split(" ");
const getMoreArticles = (number = 20) => spawnTeaserImages(number).map((image, i) => ({ image, title: `${capitalizeFirsLetter(LOREM_WORDS[3 * i])} ${LOREM_WORDS[3 * i + 1]} ${LOREM_WORDS[3 * i + 2]}` }));

module.exports = { getArticle, getMoreArticles };
