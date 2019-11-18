import React, { useContext } from "react";
import NumbersContext from "../../contexts/NumbersContext";

const ConfigurationContainer = () => {
  const {
    generateRandomNumbers,
    handleSort,
    onChangeQuantity,
    onChangeSpeed,
    onChangeValueToSearch,
    quantity,
    searching,
    speed,
    sorting,
    valueToSearch
  } = useContext(NumbersContext);
  return (
    <>
      <div className="buttons-container buttons-container--configuration">
        <div>Searching for the number</div>
        <input
          className="number"
          max="99"
          min="0"
          onChange={onChangeValueToSearch}
          step="1"
          style={{ width: `${("" + valueToSearch).length * 24}px` }}
          type="number"
          value={valueToSearch}
        />
        <div>in</div>
        <input
          className="number number--config"
          max="99"
          min="2"
          onChange={onChangeQuantity}
          step="1"
          style={{ width: `${("" + quantity).length * 24}px` }}
          type="number"
          value={quantity}
        />
        <div>numbers at</div>
        <input
          className="number number--config"
          disabled={sorting}
          min="1"
          onChange={onChangeSpeed}
          step="1"
          style={{ width: `${("" + speed).length * 17}px` }}
          type="number"
          value={speed}
        />
        <div>x speed.</div>
      </div>
      <div className="buttons-container">
        <button
          className="button"
          onClick={generateRandomNumbers}
          disabled={searching}
        >
          Generate random numbers
        </button>
        <button className="button" onClick={handleSort} disabled={searching}>
          Sort numbers
        </button>
      </div>
    </>
  );
};

export default ConfigurationContainer;
