import { createStandardAction, getType } from "typesafe-actions";

export const ADD_NEW_IFRAME_DATA = "ADD_NEW_IFRAME_DATA";
const REMOVE_IFRAME_DATA = "REMOVE_IFRAME_DATA";

export const addNewIframeData = createStandardAction(ADD_NEW_IFRAME_DATA)();
export const removeIframeData = createStandardAction(REMOVE_IFRAME_DATA)();

const iframeInitialState = {
  recivedData: []
};

export default function reducer(state = iframeInitialState, action) {
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
