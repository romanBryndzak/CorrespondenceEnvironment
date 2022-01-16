import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "3a20142d-b9c2-4e12-8c1a-fb001757b9fd"}
})


export const userAPI = {
    getUsers(numberPage, amountUsers) {
        return (
            instance.get(`users?page=${numberPage}&count${amountUsers}`)
                .then(response => {
                    return response.data
                }))

    },
    setFollow(id) {
        return (instance.post(`follow/${id}`).then(respons => respons))
    },

    setUnfollow(id) {
        return (instance.delete(`follow/${id}`).then(respons => respons))
    },
    getFollow(id) {
        return (instance.get(`follow/${id}`)
            .then(response => response))
    }
}

export const authMeAPI = {
    getAuthMe(){
        return (instance.get(`auth/me`).then(respons => respons)
        )
    }
}

