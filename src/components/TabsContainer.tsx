import React, { memo } from "react";
import TabsContainerItem from "./TabsContainerItem";
import { useTabs } from "../hooks/useSelectors";
import { Tab } from "../reducers/tabsReduces";

const TabsContainer = memo(() => {
  const items = useTabs();
  return (
    <div className="tabs-container-wrapper">
      <h3>TabsContainer</h3>
      <div className="tabs-items-wrapper">
        {items.length > 0 ? (
          items.map((item: Tab, inx: number) => {
            return <TabsContainerItem value={item} key={inx} inx={inx} />;
          })
        ) : (
          <p>No active tabs</p>
        )}
      </div>
    </div>
  );
});

export default TabsContainer;
