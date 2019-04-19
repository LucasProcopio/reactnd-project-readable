/**
 * Actions
 */
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

/**
 *  Action creators
 */
export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
}
