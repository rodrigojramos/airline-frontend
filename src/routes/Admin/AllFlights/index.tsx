import { useEffect, useState } from "react";
import { AllFlightsCard } from "../../../components/AllFlightsCard";
import { FlightDTO } from "../../../models/flight";
import * as flightService from '../../../services/flight-service';
import { Link } from "react-router-dom";

export function AllFlights() {

    const [flights, setFlights] = useState<FlightDTO[]>([]);

    useEffect(() => {

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
                    <Link to="/admin/flights/new">
                        <p>Novo</p>
                    </Link>
                </div>
                {
                    flights.map((flight => (
<                       AllFlightsCard key={flight.id} flight={flight}/>
                )))}
                
            </section>
        </main>
    )
}