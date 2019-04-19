/**
 * Log middleware
 */
const log = store => next => action => {
  console.group(action.type);
  console.log("Current action:", action);
  console.log("Current State:", store.getState());
  console.groupEnd();
  return next(action);
};

export default log;
