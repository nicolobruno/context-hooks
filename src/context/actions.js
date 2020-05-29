import { stringArrayToObject } from '../utils';

export const actions = stringArrayToObject(
  ['CLEAN_ITEMS', 'ADD_ITEM', 'DELETE_ITEM', 'SELECT_ITEM']
);

export const actionCreators = {
  cleanItems: () => ({ type: actions.CLEAN_ITEMS }),
  selectItem: id => ({ type: actions.SELECT_ITEM, payload: id }),
  addItem: payload => ({ type: actions.ADD_ITEM, payload }),
  deleteItem: id => ({ type: actions.DELETE_ITEM, payload: id })
};
