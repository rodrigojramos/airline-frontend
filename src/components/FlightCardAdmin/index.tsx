import { MoveRight } from "lucide-react";

export function FlightCardAdmin() {
    return(
        <div className="airline-flight-min-card-details">
            <div className="airline-flight-card-destination">
                <p className="padding-right-10">Uberlândia</p>
                <MoveRight />
                <p className="padding-left-10">São Paulo</p>
            </div>
            <p>Horário: 15:30</p>
            <p>Lugares: 12/180</p>
        </div>
    )
}