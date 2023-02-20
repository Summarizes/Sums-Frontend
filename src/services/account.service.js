import axios from "axios";
import { BACKEND_URL } from "./constant.service";

export async function register(formData){
    return axios.post(`${BACKEND_URL}/api/accounts`,formData)
}