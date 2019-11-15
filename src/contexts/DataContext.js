import React, { createContext, useState, useEffect } from "react";

const Context = createContext([]);
export const DataStore = props => {
  const [data, setData] = useState([]);
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
    setData(numbersArray);
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
  const onChangeQuantity = ({ target }) => {
    if (+target.value > 99) setQuantity(99);
    else if (+target.value < 2) setQuantity(2);
    else setQuantity(target.value);
  };
  const onChangeValueToSearch = ({ target }) => {
    if (+target.value > 99) setValueToSearch(99);
    else if (+target.value < 0) setValueToSearch(0);
    else setValueToSearch(target.value);
  };
  return (
    <Context.Provider
      value={{
        data,
        onChangeQuantity,
        onChangeValueToSearch,
        quantity,
        setData,
        valueToSearch
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
