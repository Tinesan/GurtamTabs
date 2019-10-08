import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createReducer from "./reducer";
import { ADD_NEW_IFRAME_DATA } from "./reducers/iframeReducer";

export default function configureStore() {
  const recievIframeDataMiddleware = store => next => action => {
    const { type, payload } = action;
    const {
      tabs: { tabs },
      iframe: { recivedData }
    } = store.getState();
    const minAmountElem = document.querySelectorAll(".min-amount-tab");
    if (minAmountElem.length) {
      minAmountElem.forEach(item => {
        item.classList.remove("min-amount-tab");
      });
    }
    if (type === ADD_NEW_IFRAME_DATA) {
      const newRecivedData = [...recivedData, payload];
      if (newRecivedData.length && tabs.length === newRecivedData.length) {
        if (newRecivedData.length === 1) {
          const iframeWithMinAmount = document.getElementById(
            newRecivedData[0].getIdFromParams
          );
          if (iframeWithMinAmount) {
            iframeWithMinAmount.classList.add("min-amount-tab");
          }
          alert(
            `${payload.getTitleFromParams} has min amount - ${payload.amount}`
          );
        } else {
          const minAmountTab = newRecivedData.sort(
            (a, b) => a.amount - b.amount
          )[0];
          const iframeWithMinAmount = document.getElementById(
            minAmountTab.getIdFromParams
          );
          if (iframeWithMinAmount) {
            iframeWithMinAmount.classList.add("min-amount-tab");
          }
          alert(
            `${minAmountTab.getTitleFromParams} has min amount - ${minAmountTab.amount}`
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
