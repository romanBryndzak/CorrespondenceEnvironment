import {userAPI} from "../api/api";

const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN_FOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOTAL_COUNT_USERS = "TOTAL_COUNT_USERS"
const SWITCH_IS_FETCHING = "SWITCH_IS_FETCHING"
const DISABLE_FOLLOW_BUT = "DISABLE_FOLLOW_BUT"


export const following = (userId, followed) => ({type: FOLLOW, id: userId, followed: followed})
export const unFollow = (userId, followed) => ({type: UN_FOLLOW, id: userId, followed: followed})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const totalCountUsers = (amount) => ({type: TOTAL_COUNT_USERS, amount: amount})
export const setCurrentPage = (number) => ({type: SET_CURRENT_PAGE, number: number})
export const switchIsFetching = (isFetching) => ({type: SWITCH_IS_FETCHING, isFetching: isFetching})
export const disableFollowBut = (id, isFetching) => ({type: DISABLE_FOLLOW_BUT, id: id, isFetching: isFetching})


const initialState = {
    member: [],
    amountUsers: 10,
    countUsers: null,
    activePage: null,
    isFetching: false,
    isFetchingAuth: false,
    followStatus: [],
}

const usersPageReducer = (usersPage = initialState, action) => {

    switch (action.type) {

        case UN_FOLLOW: {
            return {
                ...usersPage,
                member: usersPage.member.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: action.followed}
                    }
                    return user
                })
            }
        }
        case  FOLLOW: {
            return {
                ...usersPage, member: usersPage.member.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: action.followed}
                    }
                    return user
                })
            }
        }
        case  DISABLE_FOLLOW_BUT: {
            return {
                ...usersPage, followStatus:
                    action.isFetching
                        ?
                        [...usersPage.followStatus, action.id]
                        :
                        usersPage.followStatus.filter(id => id !== action.id)
            }
        }
        case
        SET_USERS: {
            return {...usersPage, member: action.users}
        }
        case
        TOTAL_COUNT_USERS: {
            return {...usersPage, countUsers: action.amount}
        }
        case
        SET_CURRENT_PAGE: {
            return {...usersPage, activePage: action.number}
        }
        case
        SWITCH_IS_FETCHING: {
            return {...usersPage, isFetching: action.isFetching}
        }

        default:
            return usersPage
    }
}

export const getUsers = (activePage, amountUsers) => (dispatch) => {
    dispatch(switchIsFetching(true))
    userAPI.getUsers(activePage, amountUsers).then(data => {
        dispatch(switchIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(totalCountUsers(data.totalCount))
    })

}

export const setActiveCurrentPage = (numberPage, amountUsers) => {
    return (dispatch) => {
        dispatch(switchIsFetching(true))
        dispatch(setCurrentPage(numberPage))
        userAPI.getUsers(numberPage, amountUsers).then(data => {
            dispatch(switchIsFetching(false))
            dispatch(setUsers(data.items))

        })
    }
}

const getFollowDisabled = (response, id, setD, dispatch) => {
    if (response.data.resultCode === 0) {
        userAPI.getFollow(id)
            .then(response => {
                if (response.status === 200) {
                    dispatch(unFollow(id, response.data))
                    dispatch(setD(id, false))
                }
            })
    }
}

export const follow = (userId) => (dispatch) => {
    dispatch(disableFollowBut(userId, true))
    userAPI.setUnfollow(userId).then(response => {
        getFollowDisabled(response, userId, disableFollowBut, dispatch)
    })
}

export const UnFollow = (userId) => (dispatch) => {
    dispatch(disableFollowBut(userId, true))
    userAPI.setFollow(userId).then(response => {
        getFollowDisabled(response, userId, disableFollowBut, dispatch)
    })
}

export default usersPageReducer