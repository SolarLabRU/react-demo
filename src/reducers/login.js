import {LOGIN, LOGOUT} from "../constants/login";
import {fromJS} from "immutable";

export const initialState = fromJS({
    username: false,
    password: false,
});


const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return state.set('username', action.username).set('password', action.password);
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};
export default login;