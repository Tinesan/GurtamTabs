import React, { memo, ReactNode } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import Select from "./components/Select";
import TabsContent from "./components/TabsContainer";
import ActiveTab from "./components/ActiveTab";
import Toolbar from "./components/Toolbar";
import { useMessage } from "./hooks/useMessage";

const store = configureStore();

type MessageProps = {
  children: ReactNode;
};

const MessageContainer: React.FC<MessageProps> = memo(({ children }) => {
  useMessage();
  return <React.Fragment>{children}</React.Fragment>;
});

const App: React.FC = memo(() => {
  return (
    <Provider store={store}>
      <MessageContainer>
        <Select />
        <TabsContent />
        <ActiveTab />
        <Toolbar />
      </MessageContainer>
    </Provider>
  );
});

export default App;
