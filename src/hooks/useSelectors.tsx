import { useSelector } from "react-redux";
import { State } from "../types";

export const useTabs = () => useSelector((state: State) => state.tabs.tabs);

export const useActiveTab = () =>
  useSelector((state: State) => state.tabs.activeTab);

export const useIframeRecievedData = () =>
  useSelector((state: State) => state.iframe.recivedData);
