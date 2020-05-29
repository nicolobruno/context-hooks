import React from "react";
import { VirtuosoGrid } from "react-virtuoso";

import { useGlobalValue } from "../../../../context";
import ItemWrapped from './components/ItemWrapper'

function Grid() {
  const [state] = useGlobalValue();
  return (
    <VirtuosoGrid
      listClassName="list-container"
      totalCount={state.items.length}
      overscan={200}
      item={(index= 1) => (
        <ItemWrapped key={`i ${index}`} id={state.items[index].id}>{state.items[index].label}</ItemWrapped>
      )}
      style={{
        height: "170px",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    />
  );
}

export default Grid;
