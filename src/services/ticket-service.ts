import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { TicketDTO } from "../models/ticket";

export function findById(id: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        url: `/client-area/${id}`,
        withCredentials: true,
    }

    return requestBackend(config);
}

export function findOccupiedSeatsByFlightId(flightId: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        url: `/client-area/occupied-seats/${flightId}`,
    }

    return requestBackend(config);
}

export function getTicketsByUserId(id: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        url: "/client-area",
        params: {
            userId: id,
        },
    }

    return requestBackend(config);
}

export function getTicketsByFlightId(flightId: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        url: `/client-area/tickets/${flightId}`,
    }

    return requestBackend(config);
}

export function updateRequest(obj: TicketDTO) {
    const config : AxiosRequestConfig = {
        method: "PUT",
        url: `/client-area/${obj.id}`,
        data: obj,
        withCredentials: true,
    }

    return requestBackend(config);
}

export function insertRequest(obj: TicketDTO) {
    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/client-area",
        withCredentials: true,
        data: obj
    }

    return requestBackend(config);
}