import React from "react";
import { changeActiveTab, removeActiveTab } from "../reducers/tabsReduces";
import { useDispatch } from "react-redux";
import { useActiveTab } from "../hooks/useSelectors";

type TabsContainerItemProps = {
  value: string;
  inx: number;
};

const TabsContainerItem = ({ value, inx }: TabsContainerItemProps) => {
  const dispatch = useDispatch();
  const ActiveTab = useActiveTab();
  const handleChangeActiveTab = (inx: number) => () => {
    dispatch(changeActiveTab(inx));
  };
  const handleRemoveTab = (inx: number) => () => {
    dispatch(removeActiveTab(inx));
  };

  return (
    <div className={inx === ActiveTab ? "tab-item active" : "tab-item"}>
      <button onClick={handleChangeActiveTab(inx)}>{value}</button>
      <button disabled={inx !== ActiveTab} onClick={handleRemoveTab(inx)}>
        X
      </button>
    </div>
  );
};

export default TabsContainerItem;
