import { useSelector } from "react-redux";

export const useTabs = () => useSelector(state => state.tabs.tabs);

export const useActiveTab = () => useSelector(state => state.tabs.activeTab);

export const useIframeRecievedData = () =>
  useSelector(state => state.iframe.recivedData);
