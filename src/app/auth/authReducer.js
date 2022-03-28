
// action - state Managment
import * as actionTypes from './actions';

export const initialstate = {
    name: 'Sandy',
    logged: localStorage.getItem('logged')
};

const authReducer = (state = initialstate, action) => {
    
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                logged: true
            };

        case actionTypes.LOGOUT: 
            return { 
                ...state,
                logged: false
            };
        case actionTypes.CHANGENAME: 
            return {
                ...state,
                name: state.name
            }    
        default:
            return state;
    }
}

export default authReducer;

