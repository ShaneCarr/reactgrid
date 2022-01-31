import { Store, createStore, applyMiddleware } from "redux";

// import createSagaMiddleware from "redux-saga";

import thunk from "redux-thunk";

import { routerMiddleware } from "connected-react-router";

import { ApplicationState, createRootReducer } from "./store";

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(
    createRootReducer(),
    initialState,
    //applyMiddleware(routerMiddleware(), thunk)
  );
  return store;
}
