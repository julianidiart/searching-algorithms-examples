export default (numbers, value) => {
  let n = numbers.length,
    m = Math.floor(Math.sqrt(n)),
    prev = 0,
    animations = [];
  animations.push({
    classes: "searching--checking",
    index: [Math.min(m, n) - 1]
  });
  while (numbers[Math.min(m, n) - 1].value < value) {
    animations.push({
      classes: "",
      index: [Math.min(m, n) - 1]
    });
    prev = m;
    m += Math.floor(Math.sqrt(n));
    if (prev >= n) return animations;
    animations.push({
      classes: "searching--checking",
      index: [Math.min(m, n) - 1]
    });
  }
  animations.push({
    classes: "",
    index: [Math.min(m, n) - 1]
  });
  while (numbers[prev].value < value) {
    animations.push({
      classes: "searching--checking",
      index: prev
    });
    animations.push({
      classes: "",
      index: prev
    });
    prev++;
    if (prev === Math.min(m, n)) return animations;
  }
  if (numbers[prev].value === value) {
    animations.push({
      classes: "searching--matched",
      index: prev
    });
    return animations;
  } else {
  }
  return animations;
};
