import React, { useCallback } from 'react'

import { actionCreators } from '../../../../../../context/actions'
import { useGlobalValue } from "../../../../../../context";

function ItemWrapper({ children, id }) {
    const [state, dispatch] = useGlobalValue();
  
    const handleOnSelect = useCallback(() => {
      dispatch(actionCreators.selectItem(id))
    }, [dispatch, id])
  
    const handleDeleteItem = useCallback(() => (
      dispatch(actionCreators.deleteItem(id))
    ), [dispatch, id])
  
    return (
      <div className={`item-wrapped-container ${state.itemSelected === id ? 'selected' : ''}`} onClick={handleOnSelect}>
        <span>{children}</span>
        {state.itemSelected === id && (
          <button className="button-delete" type="button" onClick={handleDeleteItem}>
            X
          </button>
        )}
      </div>
    )
};

export default ItemWrapper
