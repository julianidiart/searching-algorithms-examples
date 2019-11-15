const binarySearch = (
  numbers,
  value,
  p = 1,
  r = numbers.length,
  animations = []
) => {
  if (p > r) return animations;
  const q = Math.floor((p + r) / 2);
  animations.push({
    index: q - 1,
    classes: "searching--checking"
  });
  if (numbers[q - 1].value === value) {
    animations.push({
      index: q - 1,
      classes: "searching--matched"
    });
    return animations;
  }
  if (numbers[q - 1].value > value) {
    animations.push({
      index: q - 1,
      classes: ""
    });
    return binarySearch(numbers, value, p, q - 1, animations);
  } else {
    animations.push({
      index: q - 1,
      classes: ""
    });
    return binarySearch(numbers, value, q + 1, r, animations);
  }
};

export default binarySearch;
