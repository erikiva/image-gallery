import "babel-polyfill";
import React from "react";
import { render } from "react-dom";

import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import Gallery from "./Gallery";
import "./style.css";

import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById("root")
);
