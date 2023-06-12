import axios from 'axios';

const BASE_URL = "http://localhost:8081/api/v1/ht";
const USERNAME = "usernamed";
const PASSWORD = "passwordd";

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

const likeMomentApi = (userId, momentId, baseUrl = BASE_URL) => {
    return axios.post(`${baseUrl}/users/${userId}/like/${momentId}`, null,{
        baseURL: BASE_URL,
        headers: {Accept: "application/json"},
        auth: {
            username: USERNAME,
            password: PASSWORD,
        },
    });
};


export {getMomentsApi, getMomentApi, likeMomentApi, getUserApi};
