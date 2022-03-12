import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "3a20142d-b9c2-4e12-8c1a-fb001757b9fd"},
});


export const userAPI = {
    getUsers(numberPage, amountUsers) {
        return (
            instance.get(`users?page=${numberPage}&count${amountUsers}`)
                .then(response => {
                    return response.data
                }));
    },
    setFollow(id) {
        return (instance.post(`follow/${id}`));
    },

    setUnfollow(id) {
        return (instance.delete(`follow/${id}`));
    },
    getFollow(id) {
        return (instance.get(`follow/${id}`)
            .then(response => response));
    },
};

export const authMeAPI = {
    getAuthMe() {
        return (instance.get(`auth/me`));
    },
    login(email, password, rememberMe) {
        return (instance.post(`auth/login`, {email, password, rememberMe}));
    },
    logout() {
        return (instance.delete(`auth/login`));
    },
};

export const profileAPI = {
    getProfile(userId) {
        return (instance.get(`profile/${userId}`));
    },
    getStatus(userId) {
        return (instance.get(`profile/status/${userId}`));
    },
    putStatus(status) {
        return (instance.put(`profile/status`, {status: status}));
    },
    putPhoto(photo) {
        let formData = new FormData();
        formData.append("image",photo);
        return (instance.put(`profile/photo`, formData, {
            headers:{
                "Content-Type" : "multipart/form-data"
            }
        }));
    },
    putProfileIfo(profile) {
        return (instance.put(`profile`, profile));
    },
};

