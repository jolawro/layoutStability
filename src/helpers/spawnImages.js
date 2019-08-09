const spawnImages = countDimentions => numOfImages => {
  return [...new Array(numOfImages)].map((_, i) => {
    return `https://picsum.photos/${countDimentions(i).width}/${countDimentions(i).height}`;
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

export { spawnRandomImages, spawnTeaserImages };
