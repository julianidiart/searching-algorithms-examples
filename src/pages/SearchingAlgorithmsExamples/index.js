import React from "react";
import NumbersContainer from "../../components/NumbersContainer";
// import ButtonsContainer from "../../components/ButtonsContainer";
import ConfigurationContainer from "../../components/ConfigurationContainer";
import { NumbersStore } from "../../contexts/NumbersContext";

const SearchingAlgorithmsExample = () => {
  return (
    <NumbersStore>
      <div className="page-container">
        <h1>Searching Algorithms Examples</h1>
        <ConfigurationContainer />
        <NumbersContainer />
      </div>
    </NumbersStore>
  );
};

export default SearchingAlgorithmsExample;
