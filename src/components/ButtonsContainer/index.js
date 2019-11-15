import React, { useContext } from "react";
import NumbersContext from "../../contexts/NumbersContext";

const ButtonsContainer = () => {
  const context = useContext(NumbersContext);
  return (
    <>
      <div className="buttons-container">
        <button
          className="button"
          onClick={context.generateRandomNumbers}
          disabled={context.searching}
        >
          Generate random numbers
        </button>
        <button
          className="button"
          onClick={context.handleSort}
          disabled={context.searching}
        >
          Sort numbers
        </button>
      </div>
      <div className="buttons-container">
        <button
          className="button"
          onClick={context.handleLinearSearch}
          disabled={context.searching}
        >
          Linear search
        </button>
        <button
          className="button"
          // onClick={context.handleBinarySearch}
          disabled={!context.sorted || context.searching}
        >
          Binary search
        </button>
      </div>
    </>
  );
};

export default ButtonsContainer;
