import React, { memo } from "react";
import { useActiveTab, useTabs } from "../hooks/useSelectors";

const ActiveTab = memo(() => {
  const activeTab = useActiveTab();
  const tabs = useTabs();
  return (
    <div className="tab-content">
      {!!tabs.length &&
        tabs.map((item, inx) => (
          <div
            key={inx}
            className="fraim-container"
            style={{
              display: activeTab === inx ? "block" : "none"
            }}
          >
            <iframe
              id={activeTab === inx ? "active-tab" : undefined}
              title={item.id}
              data-id={item.id}
              frameBorder={0}
              src={`./iframe.html?title=${item.title}&id=${item.id}`}
              width="100%"
              height="400px"
            />
          </div>
        ))}
    </div>
  );
});

export default ActiveTab;
