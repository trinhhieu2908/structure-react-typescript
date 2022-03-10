import { createStore, applyMiddleware } from "redux";
import userReducer from "./services/users/reducer";
import createSagaMiddleware from "redux-saga";

import { delay } from "redux-saga/effects";

function* exampleSaga() {
  yield delay(1000);
  console.log("Example saga reached");
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(exampleSaga);
