import { actions } from './actions'

export const globalReducer = (state, action) => {
    switch (action.type) {
      case actions.CLEAN_ITEMS: {
        return {
          ...state,
          items: []
        };
      }
      case actions.ADD_ITEM: {
          const index = action.payload && state.items.findIndex(item => item.label === action.payload)
          const lastItem = state.items[state.items.length - 1]
          const  newItems = index < 0 ? [ ...state.items, { id: lastItem.id  + 1, label: action.payload }] : state.items
        return {
          ...state,
          items: newItems,
        };
      }
      case actions.DELETE_ITEM: {
          const index = action.payload && state.items.findIndex(item => item.id === action.payload)
          const newItems = index > 0 ? [ ...state.items.slice(0, index), ...state.items.slice(index + 1)] : state.items
        return {
          ...state,
          items: newItems
        };
      }
      case actions.SELECT_ITEM: {
        return {
          ...state,
          itemSelected: action.payload
        }
      }
    default:
      return state;
    }
  };
