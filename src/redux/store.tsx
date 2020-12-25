import { createStore, Reducer, combineReducers } from "redux";
import cart from "./ducks/cart";
import visited from "./ducks/visitedProducts";

export interface ApplicationState {
  cart: any;
  visited: any;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  cart: cart,
  visited: visited,
});

export default function configureStore(initialState: ApplicationState) {
  return createStore(reducers, initialState);
}
