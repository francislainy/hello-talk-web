import axios from 'axios';
import {USER_ID} from "../components/constants";

const BASE_URL = "http://localhost:8081/api/v1/ht";
const USERNAME = "usernamed";
const PASSWORD = "passwordd";

const getUserApi = (userId, baseUrl = BASE_URL) => {
    return axios.get(`${baseUrl}/users/${userId}`, {
        baseURL: BASE_URL,
        headers: {Accept: "application/json"},
        auth: {
            username: USERNAME,
            password: PASSWORD,
        },
    });
};

const getMomentsApi = (baseUrl = BASE_URL) => {
    return axios.get(`${baseUrl}/moments/`, {
        baseURL: BASE_URL,
        headers: {Accept: "application/json"},
        auth: {
            username: USERNAME,
            password: PASSWORD,
        },
    });
};

const getMomentApi = (momentId, baseUrl = BASE_URL) => {
    return axios.get(`${baseUrl}/moments/${momentId}`, {
        baseURL: BASE_URL,
        headers: {Accept: "application/json"},
        auth: {
            username: USERNAME,
            password: PASSWORD,
        },
    });
};

const getMomentsUserApi = (userId = USER_ID, baseUrl = BASE_URL) => {
    return axios.get(`${baseUrl}/moments/user?userId=${userId}`, {
        baseURL: BASE_URL,
        headers: {Accept: "application/json"},
        auth: {
            username: USERNAME,
            password: PASSWORD,
        },
    });
};

const createMomentApi = (userId = USER_ID, baseUrl = BASE_URL, body) => {
    return axios.post(`${baseUrl}/moments`, body, {
        baseURL: BASE_URL,
        headers: {Accept: "application/json"},
        auth: {
            username: USERNAME,
            password: PASSWORD,
        },
    });
};

const getCommentsApi = (momentId, baseUrl = BASE_URL) => {
    return axios.get(`${baseUrl}/moments/${momentId}/comments`, {
        baseURL: BASE_URL,
        headers: {Accept: "application/json"},
        auth: {
            username: USERNAME,
            password: PASSWORD,
        },
    });
};

const likeMomentApi = (userId, momentId, baseUrl = BASE_URL) => {
    return axios.post(`${baseUrl}/users/${userId}/like/${momentId}`, null, {
        baseURL: BASE_URL,
        headers: {Accept: "application/json"},
        auth: {
            username: USERNAME,
            password: PASSWORD,
        },
    });
};

export {getUserApi, getMomentsApi, getMomentApi, getMomentsUserApi, createMomentApi, likeMomentApi, getCommentsApi};
