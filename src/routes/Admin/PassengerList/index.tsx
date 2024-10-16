import { useEffect, useState } from "react";
import { PassengerCard } from "../../../components/PassengerCard";
import * as flightService from '../../../services/flight-service';
import * as ticketService from '../../../services/ticket-service';
import { FlightDTO } from "../../../models/flight";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";
import { TicketDTO } from "../../../models/ticket";

export function PassengerList() {

    const params = useParams();

    const [flight, setFlight ] = useState<FlightDTO>();

    const date = moment(flight?.flightDay).format('DD/MM/YYYY');

    const time = moment(flight?.flightDay).format('HH:mm');

    const [tickets, setTickets] = useState<TicketDTO[]>([]);

    useEffect(() => {

        flightService.findById(Number(params.flightId))
            .then(response => {
                console.log(response);
                setFlight(response.data);
            })
    }, [])

    useEffect(() => {

        ticketService.getTicketsByFlightId(Number(params.flightId))
            .then(response => {
                console.log(response);
                setTickets(response.data);
            })
    }, [])

    return(
        <main>
            <section className="airline-passenger-list-section">
                <div className="airline-passenger-list-title">
                    <h3>Lista de passageiros</h3>
                </div>
                <div className="airline-passenger-list-card">
                    <div>
                        <div className="airline-passenger-list-flight-reference">
                            <p>Voo ID: {flight?.id}</p>
                            <div className="airline-passenger-list-flight-destination">
                                <p className="padding-right-10">{flight?.departure}</p>
                                <p>para</p>
                                <p className="padding-left-10">{flight?.arrival}</p>
                            </div>
                            <p>{date}</p>
                            <p>{time}</p>
                        </div>
                        <div className="airline-passenger-list-flight">
                            {
                                tickets.map((ticket => (
                                    <PassengerCard key={ticket.id} ticket={ticket}/>
                                )))
                            }
                        </div>
                    </div>
                </div>
                <Link to="/admin/flights">
                    <div className="airline-passenger-list-btn-back">
                        Voltar
                    </div>
                </Link>
            </section>
        </main>
    )
}