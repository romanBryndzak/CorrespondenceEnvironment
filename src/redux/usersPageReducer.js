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

export default usersPageReducer