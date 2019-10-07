import React, { memo } from "react";
import { useActiveTab } from "../hooks/useSelectors";
import { useDispatch } from "react-redux";
import { removeIframeData } from "../reducers/iframeReducer";

const Toolbar = memo(() => {
  const activeTab = useActiveTab();
  const buttonInticator = activeTab === null;
  const dispatch = useDispatch();

  const handleClickMinAmount = () => {
    dispatch(removeIframeData());
    const frames = document.querySelectorAll("iframe");
    if (frames.length) {
      frames.forEach((item: any) => {
        item.contentWindow.postMessage("getTabInfo", "*");
      });
    }
  };

  const activeTabAction = (action: string) => () => {
    const frame = document.getElementById("active-tab");
    if (frame) {
      (frame as any).contentWindow.postMessage(action, "*");
    }
  };

  return (
    <div className="toolbar-container">
      <button
        className="btn"
        disabled={buttonInticator}
        onClick={activeTabAction("getActiveTabInfo")}
      >
        Get Active Tab Info
      </button>
      <button
        className="btn"
        disabled={buttonInticator}
        onClick={handleClickMinAmount}
      >
        Get Min Amount
      </button>
      <button
        className="btn"
        disabled={buttonInticator}
        onClick={activeTabAction("removeLastNumber")}
      >
        Remove last number
      </button>
      <button
        className="btn"
        disabled={buttonInticator}
        onClick={activeTabAction("addNumber")}
      >
        Add number
      </button>
    </div>
  );
});
export default Toolbar;
