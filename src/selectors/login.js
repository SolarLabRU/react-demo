import {createSelector} from "reselect";

const getLoginState = (state) => state.login;
export const getUsername = () => createSelector(getLoginState, substate => substate.get('username'));