function getMinMax(str) {
  // ваш код...
  const nums = str
    .split(" ")
    .filter(value => isFinite(value))
    .map(value => parseFloat(value, 10));

  return {
    max: Math.max(...nums),
    min: Math.min(...nums)
  };
}

