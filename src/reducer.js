import { combineReducers } from "redux";
import tabsReducer from "./reducers/tabsReduces";
import iframeReducer from "./reducers/iframeReducer";

export default function createReducer() {
  const rootReducer = combineReducers({
    tabs: tabsReducer,
    iframe: iframeReducer
  });
  return rootReducer;
}
