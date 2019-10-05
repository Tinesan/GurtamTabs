import React, { memo } from "react";
import { useActiceTabContent, useTabs } from "../hooks/useSelectors";

const ActiveTab = memo(() => {
  const activeTabContent = useActiceTabContent();
  const tabs = useTabs();
  const uniqueTabs = tabs.filter((item, pos) => tabs.indexOf(item) === pos);
  return (
    <div className="tab-content">
      {!!uniqueTabs.length &&
        uniqueTabs.map((item: string) => (
          <div
            key={item}
            className="fraim-container"
            style={{
              display: activeTabContent === item ? "block" : "none"
            }}
          >
            <iframe
              id={item}
              title={item}
              frameBorder={0}
              src={`./iframe.html?title=${item}`}
              width="100%"
              height="250px"
            />
          </div>
        ))}
    </div>
  );
});

export default ActiveTab;
