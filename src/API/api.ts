import axios from 'axios';
import {LoginDataType} from '../components/Login/Login';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c16d0024-98a6-4b7a-a16a-0ba438364551'
    }
})

export const usersAPI = {
    getUsers: async function (page: number, pageSize: number) {
        const response = await instance.get(`users?page=${page}&count=${pageSize}`);
        return response.data;
    },
    followUser: async function (id: number) {
        const response = await instance.post(`follow/${id}`);
        return response.data;
    },
    unFollowUser: async function (id: number) {
        const response = await instance.delete(`follow/${id}`);
        return response.data;
    }
}


export const profileAPI = {
    getProfileInfo: async function (userId: number) {
        const response = await instance.get(`profile/${userId}`);
        return response.data;
    },
    getStatus: async function (userId: number) {
        const response = await instance.get(`profile/status/${userId}`)
        return response.data;
    },
    setStatus: async function (status: string) {
        const response = await instance.put(`profile/status`, {
            status: status
        });
        return response.data;
    },
    setPhoto: async function (photoFile: File) {
        let formData = new FormData();
        formData.append('image', photoFile);
        const response = await instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return response.data.data;
    }
}

export const authAPI = {
    setLogin: async function (data: LoginDataType) {
        const response = await instance.post('auth/login', {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe
        });
        return response.data
    },

    logout: async function () {
        const response = await instance.delete('auth/login')
        return response.data;
    },

    getAuthInfo: async function () {
        const response = await instance.get('auth/me')
        return response.data;
    }
}