import { createStore, compose } from "redux";
import allReducers from "./reducers/index.reducer";

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === "function") {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(...enhancerList);

const initStore = () => createStore(allReducers, {}, composedEnhancer);

export default initStore;
