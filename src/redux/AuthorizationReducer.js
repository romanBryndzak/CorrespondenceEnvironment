import {authMeAPI} from "../api/api";
import {switchIsFetching} from "./usersPageReducer";
import {stopSubmit} from "redux-form";

const USER_AUTHORIZATION = "USER_AUTHORIZATION";

export const setUserAuthorization = (userId, email, login, authMe) => (
    {type: USER_AUTHORIZATION, data: {userId, email, login, authMe}}
);

const initialState = {
    userId: null,
    email: null,
    login: null,
    authMe: false,
    isFetchingAuth: false,
};


const AuthorizationReducer = (authorizationPage = initialState, action) => {
    switch (action.type) {

        case USER_AUTHORIZATION:
            return {
                ...authorizationPage,
                ...action.data,
            };

        default:
            return authorizationPage;
    }
};

export const getAuthMe = () => async (dispatch) => {
    dispatch(switchIsFetching(true));
    const response = await authMeAPI.getAuthMe();
    dispatch(switchIsFetching(false));
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        let authMe = true;
        dispatch(setUserAuthorization(id, email, login, authMe));
    }

};

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authMeAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthMe());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logout = () => async (dispatch) => {
    const response = await authMeAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserAuthorization({id: null, email: null, login: null, authMe: false}));
    }
};

export default AuthorizationReducer;