import React, { createContext, useState, useEffect } from "react";

const Context = createContext([]);
export const NumbersStore = props => {
  const [numbers, setNumbers] = useState([]);
  const [quantity, setQuantity] = useState(10);
  const [valueToSearch, setValueToSearch] = useState(10);
  useEffect(() => {
    generateRandomNumbers();
    // eslint-disable-next-line
  }, [quantity]);
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
    else setValueToSearch(target.value);
  };
  const onChangeQuantity = ({ target }) => {
    if (+target.value > 99) setQuantity(99);
    else if (+target.value < 2) setQuantity(2);
    else setQuantity(target.value);
  };
  return (
    <Context.Provider
      value={{
        numbers,
        onChangeQuantity,
        onChangeValueToSearch,
        quantity,
        setNumbers,
        valueToSearch
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
