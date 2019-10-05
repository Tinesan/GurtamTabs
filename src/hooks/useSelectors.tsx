import { useSelector } from "react-redux";
import { State } from "../types";

export const useTabs = () => useSelector((state: State) => state.tabs.tabs);

export const useUniqueTabs = () => {
  const tabs = useTabs();
  return tabs.filter((item, pos) => tabs.indexOf(item) === pos);
};

export const useActiveTab = () =>
  useSelector((state: State) => state.tabs.activeTab);

export const useActiceTabContent = () => {
  const activeTab = useActiveTab();
  const tabItems = useTabs();
  return tabItems.find((item: string, inx: number) => inx === activeTab);
};

export const useIframeRecievedData = () =>
  useSelector((state: State) => state.iframe.recivedData);
