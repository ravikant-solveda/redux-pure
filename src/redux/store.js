// import BatReducer from "./batReducer";

import { legacy_createStore as createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

// const store = createStore(BatReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());

const store = createStore(rootReducer, composeWithDevTools())

export default store;