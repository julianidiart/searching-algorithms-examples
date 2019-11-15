import React from "react";
import DataContainer from "../../components/DataContainer";
// import ButtonsContainer from "../../components/ButtonsContainer";
import ConfigurationContainer from "../../components/ConfigurationContainer";
import { DataStore } from "../../contexts/DataContext";

const SearchingAlgorithmsExample = () => {
  return (
    <DataStore>
      <div className="page-container">
        <h1>Searching Algorithms Examples</h1>
        <ConfigurationContainer />
        <DataContainer />
      </div>
    </DataStore>
  );
};

export default SearchingAlgorithmsExample;
