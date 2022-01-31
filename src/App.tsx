import React from "react";
//import "./App.css";
//import { ThemeProvider } from "@chakra-ui/core";
//import customTheme from "./theme";
import { Provider } from "react-redux";
import { ApplicationState } from "./store";
import { Store } from "redux";
//import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import HomePage from "./components/HomePage";
//import Routes from "./routes";
interface MainProps {
  store: Store<ApplicationState>;
  //history: History;
}

const App: React.FC<MainProps> = ({ store }) => {
  
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={customTheme}> */}
        {/* <ConnectedRouter history={history}> */}
          {/* <Routes /> */}
          <HomePage />
        {/* </ConnectedRouter> */}
      {/* </ThemeProvider> */}
    </Provider>
  );
};

export default App;
