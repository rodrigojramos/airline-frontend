import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

export function findById(id: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: `/flight/${id}`,
    }

    return axios(config);
}

export function findAll() {

    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/flight"
    }

    return axios(config);
}

export function findAllTodayFlights() {

    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/flight/today-flights"
    }

    return axios(config);
}

export function findPassengerList(id: number) {

    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: `/flight/passenger-list/${id}`
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