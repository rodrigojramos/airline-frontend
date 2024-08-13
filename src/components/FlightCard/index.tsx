import { MoveRight } from "lucide-react";

export function FlightCard() {
    return(
        <div className="airline-flight-card-details">
            <div className="airline-flight-card-destination">
                <p className="padding-right-10">Uberlândia</p>
                <MoveRight />
                <p className="padding-left-10">São Paulo</p>
            </div>
            <p>Horário: 15:30</p>
            <p>R$700,00</p>
        </div>
    )
}