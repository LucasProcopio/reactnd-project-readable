// redux thunk is used for asynchronous orchestration.
// handle my action creators
import thunk from "redux-thunk";
import log from "./log";
import { applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();
export default applyMiddleware(routerMiddleware(history), thunk, log);
