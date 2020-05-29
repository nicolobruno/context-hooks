import React, { useState, useCallback } from "react";


import { useGlobalValue } from '../../../../../../context'
import { actionCreators } from '../../../../../../context/actions'

function ActionBar() {
    const [state, dispatch] = useGlobalValue();
    const [ item, setItem ] = useState();

    const handleClean = useCallback(() => {
        dispatch(actionCreators.cleanItems())
        setItem('')
    }, [ dispatch, setItem ])

    const handleAddItem = useCallback(() => {
        dispatch(actionCreators.addItem(item))
        setItem('')
    }, [ dispatch, setItem, item ])

  return (
    <div>
      <input
        className="input"
        name="item"
        id="item"
        value={item}
        type="text"
        onChange={(e) => setItem(e.target.value)}
      />
      <button className="button" type="button" onClick={handleAddItem}>
        Add
      </button>
      <button className="button-clean" type="button" onClick={handleClean}>
        Clean
      </button>
    </div>
  );
}

export default ActionBar;
