import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { PlaneDTO } from "../models/plane";

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
        withCredentials: true
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

export function updateRequest(obj: PlaneDTO) {
    const config : AxiosRequestConfig = {
        method: "PUT",
        url: `/plane/${obj.id}`,
        data: obj
    }

    return requestBackend(config);
}

export function insertRequest(obj: PlaneDTO) {
    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/plane",
        data: obj
    }

    return requestBackend(config);
}
