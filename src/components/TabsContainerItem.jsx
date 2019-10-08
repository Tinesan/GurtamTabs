import React from "react";
import { changeActiveTab, removeActiveTab } from "../reducers/tabsReduces";
import { useDispatch } from "react-redux";
import { useActiveTab } from "../hooks/useSelectors";

const TabsContainerItem = ({ value, inx }) => {
  const dispatch = useDispatch();
  const ActiveTab = useActiveTab();
  const handleChangeActiveTab = inx => () => {
    dispatch(changeActiveTab(inx));
  };
  const handleRemoveTab = inx => () => {
    dispatch(removeActiveTab(inx));
  };

  return (
    <div
      id={value.id}
      className={inx === ActiveTab ? "tab-item active" : "tab-item"}
    >
      <button onClick={handleChangeActiveTab(inx)}>{value.title}</button>
      <button onClick={handleRemoveTab(inx)}>X</button>
    </div>
  );
};

export default TabsContainerItem;
