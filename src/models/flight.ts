import { PlaneDTO } from "./plane"

export type FlightDTO = {
    id: number;
    departure: string;
    arrival: string;
    flightDay: Date;
    price: number;
    availableSeats: number;
    plane: PlaneDTO;
}