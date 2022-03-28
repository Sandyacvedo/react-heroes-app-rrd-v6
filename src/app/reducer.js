import { combineReducers } from "redux"; //reducer combiner function

import authReducer from "./auth/authReducer";

// Combine reducer

const reducer = combineReducers({
    auth: authReducer
});

export default reducer;