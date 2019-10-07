import { createStandardAction, getType } from "typesafe-actions";
import { Action } from "../types";
import uuid from "uuid";

const ADD_NEW_TAB = "ADD_NEW_TAB";
const CHANGE_ACTIVE_TAB = "CHANGE_ACTIVE_TAB";
const REMOVE_ACTIVE_TAB = "REMOVE_ACTIVE_TAB";

export const addNewTab = createStandardAction(ADD_NEW_TAB)<string>();
export const changeActiveTab = createStandardAction(CHANGE_ACTIVE_TAB)<
  number
>();
export const removeActiveTab = createStandardAction(REMOVE_ACTIVE_TAB)<
  number
>();

export type Tab = {
  title: string;
  id: string;
};

export type TabsReducer = {
  tabs: Tab[];
  activeTab: number | null;
};

const tabsContainerInitialState: TabsReducer = {
  tabs: [],
  activeTab: null
};

export default function reducer(
  state = tabsContainerInitialState,
  action: Action<any>
): TabsReducer {
  const { payload, type } = action;
  switch (type) {
    case getType(addNewTab):
      return {
        ...state,
        tabs: [...state.tabs, { title: payload, id: uuid() }],
        activeTab: state.tabs.length
      };
    case getType(changeActiveTab):
      return {
        ...state,
        activeTab: payload
      };
    case getType(removeActiveTab):
      const newTabs = [...state.tabs].filter(
        (item: Tab, inx: number) => inx !== payload
      );
      const newActiveTab =
        state.activeTab && state.activeTab >= newTabs.length
          ? newTabs.length - 1
          : newTabs.length === 0
          ? null
          : state.activeTab;
      return {
        ...state,
        tabs: newTabs,
        activeTab: newActiveTab
      };
    default:
      return state;
  }
}
