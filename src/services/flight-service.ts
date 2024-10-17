import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { FlightDTO } from "../models/flight";

export function findById(id: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        url: `/flight/${id}`,
    }

    return requestBackend(config);
}

export function findAll(page: number, size = 10) {

    const config : AxiosRequestConfig = {
        method: "GET",
        url: "/flight",
        params: {
            page,
            size
        },
        withCredentials: true
    }

    return requestBackend(config);
}

export function findAllTodayFlights() {

    const config : AxiosRequestConfig = {
        method: "GET",
        url: "/flight/today-flights",
        withCredentials: true
    }

    return requestBackend(config);
}

export function findFlightsByDateAndDestination(departure: string, arrival: string, d: number, m: number, y: number) {

    const config : AxiosRequestConfig = {
        method: "GET",
        url: `/flight/${departure}/${arrival}/${d}-${m}-${y}`,
        withCredentials: true
    }

    return requestBackend(config);
}

export function findPassengerList(id: number) {

    const config : AxiosRequestConfig = {
        method: "GET",
        url: `/flight/passenger-list/${id}`,
        withCredentials: true
    }

    return requestBackend(config);
}

export function deleteById(id: number) {
    const config : AxiosRequestConfig = {
        method: "DELETE",
        url: `/flight/${id}`,
        withCredentials: true
    }

    return requestBackend(config);
}

export function updateRequest(obj: FlightDTO) {
    const config : AxiosRequestConfig = {
        method: "PUT",
        url: `/flight/${obj.id}`,
        withCredentials: true,
        data: obj
    }

    return requestBackend(config);
}

export function insertRequest(obj: FlightDTO) {
    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/flight",
        withCredentials: true,
        data: obj
    }

    return requestBackend(config);
}