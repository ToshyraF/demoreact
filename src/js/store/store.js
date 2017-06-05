import { createStore } from "redux"
import reducer from "../reducer/addReducer"
const store = createStore(reducer);
store.subscribe(() => {
  console.log("store changed", store.getState());
})
export default store;
