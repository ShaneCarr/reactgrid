import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from "./configureStore";
//import { createBrowserHistory } from "history";

const initialState: any = {};
const store = configureStore(initialState);
ReactDOM.render( 
 <App store={store} />,
 document.getElementById("root")
);