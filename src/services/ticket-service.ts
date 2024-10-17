import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { TicketDTO } from "../models/ticket";

export function findById(id: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        url: `/ticket/${id}`,
        withCredentials: true,
    }

    return requestBackend(config);
}

export function findOccupiedSeatsByFlightId(flightId: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        url: `/ticket/occupied-seats/${flightId}`,
        withCredentials: true,
    }

    return requestBackend(config);
}

export function getTicketsByUserId(id: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        url: "/ticket",
        params: {
            userId: id,
        },
        withCredentials: true,
    }

    return requestBackend(config);
}

export function getTicketsByFlightId(flightId: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        url: `/ticket/tickets/${flightId}`,
        withCredentials: true,
    }

    return requestBackend(config);
}

export function updateRequest(obj: TicketDTO) {
    const config : AxiosRequestConfig = {
        method: "PUT",
        url: `/ticket/${obj.id}`,
        data: obj,
        withCredentials: true,
    }

    return requestBackend(config);
}

export function insertRequest(obj: TicketDTO) {
    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/ticket",
        withCredentials: true,
        data: obj
    }

    return requestBackend(config);
}