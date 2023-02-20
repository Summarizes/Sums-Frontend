import axios from "axios";
import { BACKEND_URL } from "./constant.service";

export async function login(body){
    return axios.post(`${BACKEND_URL}/api/auth/login`,body)
}

export async function logout(body){
    return axios.post(`${BACKEND_URL}/api/auth/logout`,body)
}

export async function verification(body){
    return axios.post(`${BACKEND_URL}/api/auth/verify`,body)
}