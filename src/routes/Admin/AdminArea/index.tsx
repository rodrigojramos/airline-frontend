import { useEffect, useState } from "react";
import { FlightCardAdmin } from "../../../components/FlightCardAdmin";
import { FlightDTO } from "../../../models/flight";
import * as flightService from '../../../services/flight-service';

export function AdminArea() {

    const [flights, setFlights] = useState<FlightDTO[]>([]);

    useEffect(() => {

        flightService.findAllTodayFlights()
            .then(response => {
                setFlights(response.data);
            })
    }, [])

    return (
        <main className="airline-admin-area-main">
            <section className="airline-admin-area">
                <div className="airline-admin-area-title">
                    <div>
                        <p>Bem vindo à área administrativa</p>
                        <h4>VOOS DO DIA</h4>
                    </div>
                </div>
                <div className="airline-admin-area-card">
                    {
                        flights.map((flight => (
                            <FlightCardAdmin key={flight.id} flight={flight}/>
                    )))}
                </div>
            </section>
        </main>
    )
}