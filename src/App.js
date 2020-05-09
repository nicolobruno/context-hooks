import React, { useReducer } from 'react';
import Header from './components/Header'
import Home from './screens/Home'
import { GlobalContext, globalState } from './context'
import  { globalReducer } from './context/reducer'

function App() {
  return (
    <GlobalContext.Provider value={useReducer(globalReducer, globalState)} >
      <div className="App">
        <Header />
        <Home />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
