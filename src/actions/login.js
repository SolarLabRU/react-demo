import {LOGIN, LOGOUT} from "../constants/login";

/**
 * Dispatch when login submitting
 * @param username
 * @param password
 */
export function login(username, password) {
    return {
        type: LOGIN,
        username,
        password,
    }
}

/**
 * Dispatch when logout needed
 */
export function logout() {
    return {
        type: LOGOUT,
    }
}