import { useEffect, useState } from "react";
import { AllFlightsCard } from "../../../components/AllFlightsCard";
import { FlightDTO } from "../../../models/flight";
import * as flightService from '../../../services/flight-service';
import { isAuthenticated } from "../../../services/auth-service";

export function AllFlights() {

    const [flights, setFlights] = useState<FlightDTO[]>([]);

    useEffect(() => {

        console.log("Autenticado", isAuthenticated());

        flightService.findAll()
            .then(response => {
                console.log(response);
                setFlights(response.data);
            })
    }, [])

    return (
        <main className="airline-all-flights-main">
            <section className="airline-all-flights-section">
                <div className="airline-all-flights-title">
                    <h3>TODOS OS VOOS</h3>
                </div>
                <div className="airline-all-flights-new-flight">
                    <p>Criar</p>
                </div>
                {
                    flights.map((flight => (
<                       AllFlightsCard key={flight.id} flight={flight}/>
                )))}
                
            </section>
        </main>
    )
}