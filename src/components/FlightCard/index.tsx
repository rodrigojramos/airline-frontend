import { MoveRight } from "lucide-react";
import { FlightDTO } from "../../models/flight";

type Props = {
    flight: FlightDTO;
    isSelected: boolean;
    onSelect: (flight: FlightDTO) => void;
    isAvailable: boolean;
}

export function FlightCard({ flight, isSelected, onSelect, isAvailable }: Props) {

    const date = new Date(flight.flightDay);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;

    return(
        <div 
            className={`airline-flight-card-details ${isSelected ? 'selected' : ''} ${!isAvailable ? 'airline-flight-sold-out' : ''}`}
            onClick={() => isAvailable && onSelect(flight)}
        >
            <div className="airline-flight-card-destination">
                <p className="padding-right-10">{flight.departure}</p>
                <MoveRight />
                <p className="padding-left-10">{flight.arrival}</p>
            </div>
            <p>Horário: {time}</p>
            <p>R${flight.price}</p>
            {
                !isAvailable && 
                <p className="airline-flight-sold-out-text">Esgotado</p>
            }
        </div>
    )
}