import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findAll() {

    const config : AxiosRequestConfig = {
        method: "GET",
        url: "/plane"
    }

    return requestBackend(config);
}

export function deleteById(id: number) {
    const config : AxiosRequestConfig = {
        method: "DELETE",
        url: `/plane/${id}`,
    }

    return requestBackend(config);
}

export function findById(id: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        url: `/plane/${id}`,
    }

    return requestBackend(config);
}

