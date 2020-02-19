import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import carsReducer from "./cars-reducer";

let reducers = combineReducers({
    carsPage: carsReducer
});

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
