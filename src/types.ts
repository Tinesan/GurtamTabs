import { PayloadAction } from "typesafe-actions";
import { TabsReducer } from "./reducers/tabsReduces";
import { IframeReducer } from "./reducers/iframeReducer";

export type State = {
  tabs: TabsReducer;
  iframe: IframeReducer;
};

export type Action<T = {}> = PayloadAction<string, T> & {
  payload: T;
};
