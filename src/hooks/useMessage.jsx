import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addNewIframeData } from "../reducers/iframeReducer";
import { removeActiveTab } from "../reducers/tabsReduces";
import { useActiveTab } from "./useSelectors";

export const useMessage = () => {
  const dispatch = useDispatch();
  const activeTab = useActiveTab();
  const listener = useCallback(
    e => {
      if (e.data.amount) {
        dispatch(addNewIframeData(e.data));
      }
      if (e.data === "closeTab" && activeTab !== null) {
        dispatch(removeActiveTab(activeTab));
      }
    },
    [activeTab, dispatch]
  );

  useEffect(() => {
    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener);
  }, [activeTab, listener]);
};
