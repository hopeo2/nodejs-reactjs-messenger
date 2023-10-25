import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers";
import makeSagaMiddleware from "redux-saga";
import sagaApi from './Saga';
const sagaMiddleware = makeSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaApi);

export default store;