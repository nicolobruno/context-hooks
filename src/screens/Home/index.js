import React, { useState, useCallback } from 'react'
import { VirtuosoGrid } from 'react-virtuoso'

import { useGlobalValue } from '../../context'
import { actionCreators } from '../../context/actions'
import './styles.css'

const ItemWrapped = ({ children }) => (
    <div className="item-wrapped-container">
        <span>{children}</span>
    </div>
)

function Home() {
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

    const handleDeleteItem = useCallback(() => (
        dispatch(actionCreators.deleteItem(item))
    ), [ dispatch, item ])

    return (
      <div>
        <VirtuosoGrid
          listClassName="list-container"
          totalCount={state.items.length}
          overscan={200}
          item={(index) => (
            <ItemWrapped key={`i ${index}`}>{state.items[index].label}</ItemWrapped>
          )}
          style={{
            height: "170px",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        />
        <div>
            <input className="input" name="item" id="item" value={item} type="text" onChange={(e) => setItem(e.target.value)} />
            <button className="button" type="button" onClick={handleAddItem}>+</button>
            <button className="button" type="button" onClick={handleDeleteItem}>-</button>
            <button className="button-clean" type="button" onClick={handleClean}>Clean</button>
        </div>
      </div>
    );
}

export default Home
