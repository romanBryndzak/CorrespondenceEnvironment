import {authMeAPI, securityAPI} from "../api/api";
import {switchIsFetching} from "./usersPageReducer";
import {stopSubmit} from "redux-form";

const USER_AUTHORIZATION = "USER_AUTHORIZATION";
const CAPTCHA_URL = "CAPTCHA_URL";

type setUserAuthorizationType = {
    type: typeof USER_AUTHORIZATION,
    data: { userId: number | null, email: string | null, login: string | null, authMe: boolean },
}
type setCaptchaUrlType = {
    type: typeof CAPTCHA_URL,
    captcha: string | null,
}

export const setUserAuthorization =
    (userId: number | null, email: string | null, login: string | null, authMe: boolean): setUserAuthorizationType => (
        {type: USER_AUTHORIZATION, data: {userId, email, login, authMe}}
    );
export const setCaptchaUrl = (captcha: string | null): setCaptchaUrlType => ({type: CAPTCHA_URL, captcha: captcha});

// export type authStateType = {
//     userId: null | number,
//     email: number | null,
//     login: string | null,
//     authMe: boolean,
//     isFetchingAuth: boolean,
// }

const initialState = {
    userId: null as null | number,
    email: null as number | null,
    login: null as string | null,
    authMe: false,
    isFetchingAuth: false,
    captchaUrl: null,
};

export type authStateType = typeof initialState;

const AuthorizationReducer = (authorizationPage = initialState, action: any): authStateType => {
    switch (action.type) {

        case USER_AUTHORIZATION:
            return {
                ...authorizationPage,
                ...action.data,
            };

            case CAPTCHA_URL:
            return {
                ...authorizationPage, captchaUrl: action.captcha,
            };

        default:
            return authorizationPage;
    }
};

export const getAuthMe = () => async (dispatch: any) => {
    dispatch(switchIsFetching(true));
    const response = await authMeAPI.getAuthMe();
    dispatch(switchIsFetching(false));
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        let authMe = true;
        dispatch(setUserAuthorization(id, email, login, authMe));
    }

};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const response = await authMeAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthMe());
        dispatch(setCaptchaUrl(null))
    } else {
        if(response.data.resultCode === 10){
            dispatch(captchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logout = () => async (dispatch: any) => {
    const response = await authMeAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserAuthorization(null, null, null, false));
    }
};

export const captchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
        dispatch(setCaptchaUrl(response.data.url));
};

export default AuthorizationReducer;