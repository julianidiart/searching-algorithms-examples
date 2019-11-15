const linearSearch = (numbers, value, i = 0, animations = []) => {
  if (i > 0) {
    animations.push({
      index: i - 1,
      classes: ""
    });
  }
  if (i > numbers.length - 1) {
    return animations;
  }
  animations.push({
    index: i,
    classes: "searching--checking"
  });
  if (numbers[i].value === value) {
    animations.push({
      index: i,
      classes: "searching--matched"
    });
    return animations;
  }
  return linearSearch(numbers, value, ++i, animations);
};

export default linearSearch;
