import React, { createContext, useState, useEffect } from "react";
import linearSearch from "../searchingAlgorithms/linearSearch";
import binarySearch from "../searchingAlgorithms/binarySearch";

const Context = createContext([]);
export const NumbersStore = props => {
  const [numbers, setNumbers] = useState([]);
  const [quantity, setQuantity] = useState(10);
  const [sorted, setSorted] = useState(false);
  const [searching, setSearching] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [valueToSearch, setValueToSearch] = useState(10);
  useEffect(() => {
    generateRandomNumbers();
    // eslint-disable-next-line
  }, [quantity]);
  useEffect(() => {
    const isSorted =
      JSON.stringify([...numbers]) ===
      JSON.stringify([...numbers].sort((a, b) => a.value - b.value));
    setSorted(isSorted);
  }, [numbers]);
  const generateRandomNumbers = () => {
    const numbersArray = [];
    for (let i = 0; i < quantity; i++) {
      numbersArray.push({
        id: uniqueID(),
        value: getRandomNumber(0, 99),
        classes: ""
      });
    }
    setNumbers(numbersArray);
  };
  const uniqueID = () => {
    function chr4() {
      return Math.random()
        .toString(16)
        .slice(-4);
    }
    return (
      chr4() +
      chr4() +
      "-" +
      chr4() +
      "-" +
      chr4() +
      "-" +
      chr4() +
      "-" +
      chr4() +
      chr4() +
      chr4()
    );
  };
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const onChangeValueToSearch = ({ target }) => {
    if (+target.value > 99) setValueToSearch(99);
    else if (+target.value < 0 || target.value === "") setValueToSearch(0);
    else setValueToSearch(+target.value);
  };
  const onChangeQuantity = ({ target }) => {
    if (+target.value > 99) setQuantity(99);
    else if (+target.value < 2) setQuantity(2);
    else setQuantity(+target.value);
  };
  const handleSort = () => {
    const sortedNumbers = [...numbers].sort((a, b) => a.value - b.value);
    setNumbers(sortedNumbers);
  };
  const handleLinearSearch = () => {
    const linearSearchAnimations = linearSearch(numbers, valueToSearch);
    performAnimations(linearSearchAnimations);
  };
  const handleBinarySearch = () => {
    const binarySearchAnimations = binarySearch(numbers, valueToSearch);
    console.log(binarySearchAnimations);
    performAnimations(binarySearchAnimations);
  };
  const performAnimations = animations => {
    setSearching(true);
    animations.forEach((animation, index) => {
      setTimeout(() => {
        let movingNumbers = [...numbers];
        movingNumbers[animation.index].classes = animation.classes;
        if (animation.toIndex !== undefined) {
          const aux = movingNumbers[animation.toIndex].value;
          movingNumbers[animation.toIndex].value =
            movingNumbers[animation.index].value;
          movingNumbers[animation.index].value = aux;
        }
        setNumbers(movingNumbers);
      }, index * (500 / speed));
    });
    setTimeout(() => {
      setSearching(false);
    }, animations.length * (500 / speed));
  };
  const onChangeSpeed = ({ target }) => {
    setSpeed(target.value);
  };
  return (
    <Context.Provider
      value={{
        generateRandomNumbers,
        handleBinarySearch,
        handleLinearSearch,
        handleSort,
        numbers,
        onChangeQuantity,
        onChangeSpeed,
        onChangeValueToSearch,
        quantity,
        searching,
        setNumbers,
        sorted,
        speed,
        valueToSearch
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
