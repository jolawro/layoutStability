export const pixelToRem = pxSize => {
  const bodySize = 16;
  const remValue = pxSize / bodySize;

  return `${remValue}rem`;
};
