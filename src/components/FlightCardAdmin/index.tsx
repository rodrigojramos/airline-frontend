import { MoveRight, NotebookText } from "lucide-react";
import { Link } from "react-router-dom";
import { FlightDTO } from "../../models/flight";

type Props = {
    flight: FlightDTO;
}

export function FlightCardAdmin({ flight }: Props) {

    const date = new Date(flight.flightDay);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;

    return (
        <div className="airline-flight-card-admin">
            <div className="airline-all-flights-card">
                <div className="airline-all-flights-destination">
                    <p className="padding-right-10">{flight.departure}</p>
                    <MoveRight />
                    <p className="padding-left-10">{flight.arrival}</p>
                </div>
                <p>Horário: {time}</p>
                <p>Lugares livres: {flight.availableSeats}</p>
                <div className="airline-all-flights-card-icon">
                    <Link to="/admin/passenger-list">
                        <NotebookText />
                    </Link>
                </div>
            </div>
        </div>
    )
}