import {increaseId} from "../auxiliaryTools/auxiliaryTools";
import {profileAPI} from "../api/api";
import {switchIsFetching} from "./usersPageReducer";

const ADD_POST = "ADD_POST";
const CHANGE_STATUS = "CHANGE_STATUS";
const SET_STATUS = "SET_STATUS";
const ADD_INFO_USER = "ADD_INFO_USER";
const DISABLE_NAV_LINK_SIDEBAR = 'DISABLE_NAV_LINK_SIDEBAR';

export const setDisableNavLinkSidebar = (value) => ({type: DISABLE_NAV_LINK_SIDEBAR, value: value});
export const addPost = (newText) => ({type: ADD_POST, newText: newText});
export const changeStatus = (newText) => ({type: CHANGE_STATUS, newText: newText});
export const setStatus = (status) => ({type: SET_STATUS, newStatus: status});
export const addInfoUser = (infoUser) => ({type: ADD_INFO_USER, infoUser: infoUser});

const initialState = {
    status: "",

    infoUser: {
        aboutMe: "",
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "",
        userId: null,
        photos: {
            small: null,
            large: null
        },
    },

    posts: [
        {id: 0, post: "Development in react is very interesting!", like: 5},
        {id: 1, post: "Yes bro, I support your opinion.", like: 2},
        {id: 2, post: "On my think, angular is better!", like: 0},
    ],
    disableNavLinkSidebar: false,
};

const mainPageReducer = (mainPage = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {...mainPage, status: action.newText};

        case SET_STATUS:
            return {...mainPage, status: action.newStatus};

        case ADD_INFO_USER:
            return {...mainPage, infoUser: action.infoUser};

        case ADD_POST:
            let text = action.newText;
            let idNumber = increaseId(mainPage.posts.length);

            return {
                ...mainPage,
                posts: [...mainPage.posts, {id: idNumber, post: text, like: 0}]
            };

        case DISABLE_NAV_LINK_SIDEBAR:
            return {...mainPage, disableNavLinkSidebar: action.value};

        default:
            return mainPage;
    }
};

export default mainPageReducer;


export const getProfile = (userId) => async (dispatch) => {
    dispatch(switchIsFetching(true));
    const response = await profileAPI.getProfile(userId);
    dispatch(switchIsFetching(false));
    dispatch(addInfoUser(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.putStatus(status);
    if (response.status === 200) {
        dispatch(setStatus(status));
    }
};