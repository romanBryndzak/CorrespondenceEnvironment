import {authMeAPI} from "../api/api";
import {switchIsFetching} from "./usersPageReducer";

const USER_AUTHORIZATION = "USER_AUTHORIZATION";

export const setUserAuthorization = (userId, email, login, authMe) => (
    {type: USER_AUTHORIZATION, data: {userId, email, login, authMe}}
);

const initialState = {
    userId: null,
    email: null,
    login: null,
    authMe: false,
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

export const getAuthMe = () => (dispatch) => {
    dispatch(switchIsFetching(true));
    authMeAPI.getAuthMe().then(response => {
        dispatch(switchIsFetching(false));
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data;
            let authMe = true;
            dispatch(setUserAuthorization(id, email, login, authMe));
        }
    })
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authMeAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthMe());
        }
    })
};

export const logout = () => (dispatch) => {
    authMeAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserAuthorization({id: null, email: null, login: null, authMe: false}));
        }
    })
}

export default AuthorizationReducer;