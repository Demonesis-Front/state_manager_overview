 import React from "react";
import * as redux from "redux";
import thunk from 'redux-thunk';
import {applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
 import {cartReducer} from "./reducer";


export const store = redux.createStore(cartReducer, composeWithDevTools(applyMiddleware(thunk)));

