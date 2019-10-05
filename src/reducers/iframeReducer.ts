import { createStandardAction, getType } from "typesafe-actions";
import { Action } from "../types";

export const ADD_NEW_IFRAME_DATA = "ADD_NEW_IFRAME_DATA";
const REMOVE_IFRAME_DATA = "REMOVE_IFRAME_DATA";

export const addNewIframeData = createStandardAction(ADD_NEW_IFRAME_DATA)<
  string
>();
export const removeIframeData = createStandardAction(REMOVE_IFRAME_DATA)();

export type IframeRecivedItem = {
  amount: number;
  getParamsFrom: string;
  rowChildrenLength: number;
};

export type IframeReducer = {
  recivedData: IframeRecivedItem[];
};

const iframeInitialState: IframeReducer = {
  recivedData: []
};

export default function reducer(
  state = iframeInitialState,
  action: Action<any>
): IframeReducer {
  const { payload, type } = action;
  switch (type) {
    case getType(addNewIframeData):
      return {
        recivedData: [...state.recivedData, payload]
      };
    case getType(removeIframeData):
      return {
        ...iframeInitialState
      };
    default:
      return state;
  }
}
