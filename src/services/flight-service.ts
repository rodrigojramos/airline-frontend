import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";
import { FlightDTO } from "../models/flight";

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

export function findFlightsByDateAndDestination(departure: string, arrival: string, d: number, m: number, y: number) {

    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: `/flight/${departure}/${arrival}/${d}-${m}-${y}`,
        withCredentials: true
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

export function updateRequest(obj: FlightDTO) {
    const config : AxiosRequestConfig = {
        method: "PUT",
        baseURL: BASE_URL,
        url: `/flight/${obj.id}`,
        withCredentials: true,
        data: obj
    }

    return axios(config);
}

export function insertRequest(obj: FlightDTO) {
    const config : AxiosRequestConfig = {
        method: "POST",
        baseURL: BASE_URL,
        url: "/flight",
        withCredentials: true,
        data: obj
    }

    return axios(config);
}