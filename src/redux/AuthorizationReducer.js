import {authMeAPI} from "../api/api";
import {switchIsFetching} from "./usersPageReducer";

const USER_AUTHORIZATION = "USER_AUTHORIZATION"

export const setUserAuthorization = (userId, email, login) => ({type: USER_AUTHORIZATION, data: {userId, email, login}})

const initialState = {
    userId: null,
    email: null,
    login: null
}


const AuthorizationReducer = (authorizationPage = initialState, action) => {
    switch (action.type) {

        case USER_AUTHORIZATION:
            return {
                ...authorizationPage, ...action.data
            }

        default:
            return authorizationPage
    }
}

export const getAuthMe =() => (dispatch) => {
    dispatch(switchIsFetching(true))
    authMeAPI.getAuthMe().then(response => {
        dispatch(switchIsFetching(false))
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch(setUserAuthorization(id, email, login))
        }
    })

}

export default AuthorizationReducer;