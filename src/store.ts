import { createStore, Middleware, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createReducer from "./reducer";
import {
  ADD_NEW_IFRAME_DATA,
  IframeRecivedItem
} from "./reducers/iframeReducer";

export default function configureStore() {
  const recievIframeDataMiddleware: Middleware = store => next => action => {
    const { type, payload } = action;
    const {
      tabs: { tabs },
      iframe: { recivedData }
    } = store.getState();
    if (type === ADD_NEW_IFRAME_DATA) {
      const uniqueTabs = tabs.filter(
        (item: string, pos: number) => tabs.indexOf(item) === pos
      );
      const newRecivedData = [...recivedData, payload];
      if (
        newRecivedData.length &&
        uniqueTabs.length === newRecivedData.length
      ) {
        if (newRecivedData.length === 1) {
          alert(`${payload.getParamsFrom} has min amount - ${payload.amount}`);
        } else {
          const minAmountTab = newRecivedData.sort(
            (a: IframeRecivedItem, b: IframeRecivedItem) => a.amount - b.amount
          )[0];
          alert(
            `${minAmountTab.getParamsFrom} has min amount - ${minAmountTab.amount}`
          );
        }
      }
    }
    return next(action);
  };
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    createReducer(),
    composeEnhancers(applyMiddleware(recievIframeDataMiddleware))
  );
  return store;
}
