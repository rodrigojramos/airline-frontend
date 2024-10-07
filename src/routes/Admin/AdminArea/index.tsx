import { useEffect, useState } from "react";
import { FlightCardAdmin } from "../../../components/FlightCardAdmin";
import { FlightDTO } from "../../../models/flight";
import * as flightService from '../../../services/flight-service';
import { UserDTO } from "../../../models/user";
import * as userService from "../../../services/user-service"

export function AdminArea() {

    const [flights, setFlights] = useState<FlightDTO[]>([]);

    const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        userService.findMe()
        .then(response => {
            setUser(response.data);
        })
    }, [])

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
                        <p>Bem vindo à área administrativa {user?.name}</p>
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