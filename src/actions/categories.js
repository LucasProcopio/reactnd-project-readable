import { RECEIVE_CATEGORIES } from "./actionTypes";

/**
 *  Action creators
 */
export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
}
