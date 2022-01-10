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

export default AuthorizationReducer;