import { combineReducers } from "redux";
import tabsReducer from "./reducers/tabsReduces";
import iframeReducer from "./reducers/iframeReducer";
import { State } from "./types";

export default function createReducer() {
  const rootReducer = combineReducers<State>({
    tabs: tabsReducer,
    iframe: iframeReducer
  });
  return rootReducer;
}
