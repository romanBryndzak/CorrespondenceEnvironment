import {increaseId} from "../auxiliaryTools/auxiliaryTools";
import {profileAPI} from "../api/api";
import {switchIsFetching} from "./usersPageReducer";
import {stopSubmit} from "redux-form";

type setDisableNavLinkSidebarType = {
    type: typeof DISABLE_NAV_LINK_SIDEBAR,
    value: boolean,
};
type addPostType = {
    type: typeof ADD_POST,
    newText: string,
};
type changeStatusType = {
    type: typeof CHANGE_STATUS,
    newText: string,
};
type setStatusType = {
    type: typeof SET_STATUS,
    newStatus: string,
};
type addInfoUserType = {
    type: typeof ADD_INFO_USER,
    infoUser: infoUserType,
};
type setSavePhotoType = {
    type: typeof SET_SAVE_PHOTO,
    photos: photosType,
};

const DISABLE_NAV_LINK_SIDEBAR = 'DISABLE_NAV_LINK_SIDEBAR';
const ADD_POST = "ADD_POST";
const CHANGE_STATUS = "CHANGE_STATUS";
const SET_STATUS = "SET_STATUS";
const ADD_INFO_USER = "ADD_INFO_USER";
const SET_SAVE_PHOTO = 'SET_SAVE_PHOTO';

export const setDisableNavLinkSidebar = (value: boolean): setDisableNavLinkSidebarType => ({
    type: DISABLE_NAV_LINK_SIDEBAR,
    value: value
});
export const addPost = (newText: string): addPostType => ({type: ADD_POST, newText: newText});
export const changeStatus = (newText: string): changeStatusType => ({type: CHANGE_STATUS, newText: newText});
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, newStatus: status});
export const addInfoUser = (infoUser: infoUserType): addInfoUserType => ({type: ADD_INFO_USER, infoUser: infoUser});
export const setSavePhoto = (photos: photosType): setSavePhotoType => ({type: SET_SAVE_PHOTO, photos: photos});

export type  contactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null,
};

export type  photosType = {
    small: string | null,
    large: string | null,
};

export type infoUserType = {
    aboutMe: string | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number | null,
    contacts: contactsType,
    photos: photosType,
};

export type postsType = {
    id: number, post: string, like: number
};

export type initialStateType = {
    status: string,
    isFetching: boolean,
    disableNavLinkSidebar: boolean,
    infoUser: infoUserType,
    posts: Array<postsType>,
};

const initialState: initialStateType = {
    status: "",
    isFetching: false,
    disableNavLinkSidebar: false,
    infoUser: {
        aboutMe: "",
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "",
        userId: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        photos: {
            small: null,
            large: null,
        },
    },
    posts: [
        {id: 0, post: "Development in react is very interesting!", like: 5},
        {id: 1, post: "Yes bro, I support your opinion.", like: 2},
        {id: 2, post: "On my think, angular is better!", like: 0},
    ],
};

const mainPageReducer = (mainPage = initialState, action: any): initialStateType => {
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

        case SET_SAVE_PHOTO:
            return {...mainPage, infoUser: {...mainPage.infoUser, photos: action.photos}};

        default:
            return mainPage;
    }
};

export default mainPageReducer;

export const getProfile = (userId: number) => async (dispatch: any) => {
    dispatch(switchIsFetching(true));
    const response = await profileAPI.getProfile(userId);
    dispatch(switchIsFetching(false));
    dispatch(addInfoUser(response.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.putStatus(status);
    if (response.status === 200) {
        dispatch(setStatus(status));
    }
};

export const sendPhotoFile = (photo: photosType) => async (dispatch: any) => {
    const response = await profileAPI.putPhoto(photo);
    if (response.data.resultCode === 0) {
        dispatch(setSavePhoto(response.data.data.photos));
    }
};

export const changeProfileInfo = (profile: any, userId: number) => async (dispatch: any) => {
    const response = await profileAPI.putProfileIfo(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
        dispatch(switchIsFetching(false));
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
        let newMes = message.split(/[()]/);
        const context = newMes[0];
        const titleContext1 = newMes[1];
        let titleContext2 = titleContext1.split(/[->]/);
        let titleContext = titleContext1.charAt(0).toLowerCase() + titleContext1.slice(1);
        let titleContextContact = 'contacts';
        if (titleContext2.length > 1) {
            let contactTitle = titleContext2[2];
            titleContext = contactTitle.charAt(0).toLowerCase() + contactTitle.slice(1);
        }

        // @ts-ignore
        function returnError(titleContextContact: string, titleContext: string, context: string): any {
            if (titleContext2.length > 1) {
                return dispatch(stopSubmit("profileInfo", {[titleContextContact]: {[titleContext]: context}}))
            } else {
                return dispatch(stopSubmit("profileInfo", {[titleContext]: context}))
            }
        }

        returnError(titleContextContact, titleContext, context);
    }
};