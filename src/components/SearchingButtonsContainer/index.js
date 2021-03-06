import React, { useContext } from "react";
import NumbersContext from "../../contexts/NumbersContext";

const SearchingButtonsContainer = () => {
  const {
    handleBinarySearch,
    handleJumpSearch,
    handleLinearSearch,
    searching,
    sorted
  } = useContext(NumbersContext);
  return (
    <>
      <div className="buttons-container">
        <button
          className="button"
          onClick={handleLinearSearch}
          disabled={searching}
        >
          Linear search
        </button>
        <button
          className="button"
          onClick={handleBinarySearch}
          disabled={!sorted || searching}
        >
          Binary search
        </button>
        <button
          className="button"
          onClick={handleJumpSearch}
          disabled={!sorted || searching}
        >
          Jump search
        </button>
      </div>
    </>
  );
};

export default SearchingButtonsContainer;
