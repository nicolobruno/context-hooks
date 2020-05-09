import { stringArrayToObject } from '../utils';

export const actions = stringArrayToObject(
  ['CLEAN_ITEMS', 'ADD_ITEM', 'DELETE_ITEM']
);

export const actionCreators = {
  cleanItems: () => ({ type: actions.CLEAN_ITEMS }),
  addItem: payload => ({ type: actions.ADD_ITEM, payload }),
  deleteItem: payload  => ({ type: actions.DELETE_ITEM, payload })
};
