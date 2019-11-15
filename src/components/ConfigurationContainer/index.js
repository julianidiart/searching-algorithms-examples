import React, { useContext } from "react";
import DataContext from "../../contexts/DataContext";

const ConfigurationContainer = () => {
  const context = useContext(DataContext);
  return (
    <div className="buttons-container buttons-container--configuration">
      <div>Searching for the number</div>
      <input
        className="item"
        max="99"
        min="0"
        onChange={context.onChangeValueToSearch}
        step="1"
        style={{ width: `${("" + context.valueToSearch).length * 24}px` }}
        type="number"
        value={context.valueToSearch}
      />
      <div>in</div>
      <input
        className="item item--config"
        max="99"
        min="2"
        onChange={context.onChangeQuantity}
        step="1"
        style={{ width: `${("" + context.quantity).length * 24}px` }}
        type="number"
        value={context.quantity}
      />
      <div>numbers.</div>
    </div>
  );
};

export default ConfigurationContainer;
