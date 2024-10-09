import { FlightDTO } from "./flight";
import { UserDTO } from "./user";

export type TicketDTO = {
    id: number;
    seat: string;
    passenger: UserDTO;
    flights: FlightDTO[];
}