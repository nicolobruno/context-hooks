This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

One simple form for replace **react-redux** in your app using **context** and **useReducer**.

## Context

In **/src/context/index** we have define the function **useGlobalValue** with which we access state and dispatch in each component. Is very simple how redux.

```js
const [state, dispatch] = useGlobalValue();
```

## UseReducer

The hook useReducer receives three params **reducer**, **initialArg** and **init**. You can read more [here](https://reactjs.org/docs/hooks-reference.html#usereducer).

In my case I use useReducer this way:

``` js
<GlobalContext.Provider value={useReducer(globalReducer, globalState)} >
  <div className="App">
    <Header />
    <Home />
  </div>
</GlobalContext.Provider>
```

In **globalReducer** we have define all the actions and **globalState** we have define the default values state.

## Demo & Examples

To build the examples locally, run:

```bash
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.

## ScreenShot

![all text](https://user-images.githubusercontent.com/28309103/83261618-00446180-a192-11ea-98a1-99e0f98269dc.gif)
