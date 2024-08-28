import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

export function findAll() {

    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/flight"
    }

    return axios(config);
}

export function deleteById(id: number) {
    const config : AxiosRequestConfig = {
        method: "DELETE",
        baseURL: BASE_URL,
        url: `/flight/${id}`,
    }

    return axios(config);
}