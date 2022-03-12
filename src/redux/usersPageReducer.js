import {userAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOTAL_COUNT_USERS = "TOTAL_COUNT_USERS";
const SWITCH_IS_FETCHING = "SWITCH_IS_FETCHING";
const DISABLE_FOLLOW_BUT = "DISABLE_FOLLOW_BUT";


export const following = (userId, followed) => ({type: FOLLOW, id: userId, followed: followed});
export const unFollow = (userId, followed) => ({type: UN_FOLLOW, id: userId, followed: followed});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const totalCountUsers = (amount) => ({type: TOTAL_COUNT_USERS, amount: amount});
export const setCurrentPage = (number) => ({type: SET_CURRENT_PAGE, number: number});
export const switchIsFetching = (isFetching) => ({type: SWITCH_IS_FETCHING, isFetching: isFetching});
export const disableFollowBut = (id, isFetching) => ({type: DISABLE_FOLLOW_BUT, id: id, isFetching: isFetching});

const updateUserFollowing = (items, itemId, newObjectProps) => {
    return (
        items.map(user => {
            if (user.id === itemId) {
                return {...user, followed: newObjectProps};
            }
            return user;
        })
    );
};

const initialState = {
    member: [],
    amountUsers: 15,
    countUsers: null,
    activePage: null,
    isFetching: false,
    followStatus: [],
};

const usersPageReducer = (usersPage = initialState, action) => {

    switch (action.type) {

        case UN_FOLLOW: {
            return {
                ...usersPage,
                member: updateUserFollowing(usersPage.member, action.id, action.followed),
            }
        }
        case  FOLLOW: {
            return {
                ...usersPage,
                member: updateUserFollowing(usersPage.member, action.id, action.followed),
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
            return {...usersPage, member: action.users};
        }
        case
        TOTAL_COUNT_USERS: {
            return {...usersPage, countUsers: action.amount};
        }
        case
        SET_CURRENT_PAGE: {
            return {...usersPage, activePage: action.number};
        }
        case
        SWITCH_IS_FETCHING: {
            return {...usersPage, isFetching: action.isFetching};
        }

        default:
            return usersPage;
    }
};

export const getUsers = (activePage, amountUsers) => async (dispatch) => {
    dispatch(switchIsFetching(true));
    const data = await userAPI.getUsers(activePage, amountUsers);
    dispatch(switchIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(totalCountUsers(data.totalCount));
};

export const setActiveCurrentPage = (numberPage, amountUsers) => async (dispatch) => {
    dispatch(switchIsFetching(true));
    dispatch(setCurrentPage(numberPage));
    const data = await userAPI.getUsers(numberPage, amountUsers);
    dispatch(switchIsFetching(false));
    dispatch(setUsers(data.items));
};

const getFollowDisabled = async (id, setUnD, setD, apiMethod, updateFollowing, dispatch) => {
    dispatch(setD(id, true));
    let response = await apiMethod(id);
    if (response.data.resultCode === 0) {
        const response = await userAPI.getFollow(id);
        if (response.status === 200) {
            dispatch(updateFollowing(id, response.data));
            dispatch(setUnD(id, false));
        }
    }
};

export const follow = (userId) => async (dispatch) => {
    await getFollowDisabled(userId, disableFollowBut, disableFollowBut, userAPI.setUnfollow.bind(userAPI), following, dispatch);
};

export const UnFollow = (userId) => async (dispatch) => {
    await getFollowDisabled(userId, disableFollowBut, disableFollowBut, userAPI.setFollow.bind(userAPI), unFollow, dispatch);
};

export default usersPageReducer;

// export const UnFollow = (userId) => async (dispatch) => {
// dispatch(disableFollowBut(userId, true));
// const response = await userAPI.setFollow(userId);
// getFollowDisabled(response, userId, disableFollowBut, dispatch);
// };