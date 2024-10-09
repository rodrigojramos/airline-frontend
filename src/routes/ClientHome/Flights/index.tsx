import { ArrowBigRight } from "lucide-react";
import { FlightCard } from "../../../components/FlightCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FlightDTO } from "../../../models/flight";
import * as flightService from "../../../services/flight-service";
import { Link } from "react-router-dom";

type LocationState = {
    origin: string;
    destination: string;
    goingDate: string;
    backDate: string;
    tripType: 'one-way' | 'round-trip';
};

export function Flights() {

    const navigate = useNavigate();

    const location = useLocation();
    
    const { origin, destination, goingDate, backDate, tripType } = location.state as LocationState;

    const [year1, month1, day1] = goingDate ? goingDate.split('-') : [null, null, null];
    const goingDateFormated = (day1 && month1 && year1) ? `${day1}/${month1}/${year1}` : "Data inválida";

    const [year2, month2, day2] = backDate ? backDate.split('-') : [null, null, null];
    const backDateFormated = (day2 && month2 && year2) ? `${day2}/${month2}/${year2}` : "Data inválida";

    const [flights, setFlights] = useState<FlightDTO[]>([]);

    const [backFlights, setBackFlights] = useState<FlightDTO[]>([]);

    const [selectedGoingFlight, setSelectedGoingFlight] = useState<FlightDTO | null>(null);
    
    const [selectedBackFlight, setSelectedBackFlight] = useState<FlightDTO | null>(null);

    const [noGoingFlightsAvailable, setNoGoingFlightsAvailable] = useState(false);

    const [noBackFlightsAvailable, setNoBackFlightsAvailable] = useState(false);


    function handleClickConfirmation() {
        navigate("/payment", {
            state: {
                selectedGoingFlight,
                selectedBackFlight,
                tripType
            }
        })
    }

    useEffect(() => {

        flightService.findFlightsByDateAndDestination(origin, destination, Number(day1), Number(month1), Number(year1))
            .then(response => {
                setFlights(response.data);
                if(response.data.length === 0) {
                    setNoGoingFlightsAvailable(true);
                }
            })
    }, [day1, destination, month1, origin, year1, noGoingFlightsAvailable])

    useEffect(() => {

        flightService.findFlightsByDateAndDestination(destination, origin, Number(day2), Number(month2), Number(year2))
            .then(response => {
                setBackFlights(response.data);
                if(response.data.length === 0) {
                    setNoBackFlightsAvailable(true);
                }
            })
    }, [day2, destination, month2, origin, year2])

    return (
        <main className="airline-main-flights">
            <section className="airline-section-flights">
                {
                    tripType == 'one-way' ? (
                        <>
                            <div className="airline-flights-details">
                                <h3>VOOS DE IDA DISPONIVÉIS</h3>
                                <div className="airline-flights-destination">
                                    <p>{origin}</p>
                                    <ArrowBigRight />
                                    <p>{destination}</p>
                                </div>
                                <p>{goingDateFormated}</p>
                            </div>
                            <div className="airline-flight-card">
                                {
                                    flights.map((flight => (
                                    <FlightCard 
                                        key={flight.id} 
                                        flight={flight}
                                        isSelected={selectedGoingFlight?.id === flight.id}
                                        onSelect={setSelectedGoingFlight}
                                    />
                                )))}
                                {
                                    noGoingFlightsAvailable && (
                                        <div className="airline-message-no-flights">
                                            <p>Não foi encontrado nenhuma passagem nesta data {goingDateFormated}.</p>
                                        </div>
                                    )
                                }
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="airline-flights-details">
                                <h3>VOOS DE IDA DISPONIVÉIS</h3>
                                <div className="airline-flights-destination">
                                    <p>{origin}</p>
                                    <ArrowBigRight />
                                    <p>{destination}</p>
                                </div>
                                <p>{goingDateFormated}</p>
                            </div>
                            <div className="airline-flight-card">
                                {
                                    flights.map((flight => (
                                    <FlightCard 
                                        key={flight.id} 
                                        flight={flight}
                                        isSelected={selectedGoingFlight?.id === flight.id}
                                        onSelect={setSelectedGoingFlight}
                                    />
                                )))}
                                {
                                    noGoingFlightsAvailable && (
                                        <div className="airline-message-no-flights">
                                            <p>Não foi encontrado nenhuma passagem nesta data {goingDateFormated}.</p>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="airline-flights-details">
                                <h3>VOOS DE VOLTA DISPONIVÉIS</h3>
                                <div className="airline-flights-destination">
                                    <p>{destination}</p>
                                    <ArrowBigRight />
                                    <p>{origin}</p>
                                </div>
                                <p>{backDateFormated}</p>
                            </div>
                            <div className="airline-flight-card">
                                {
                                    backFlights.map((flight => (
                                    <FlightCard 
                                        key={flight.id} 
                                        flight={flight}
                                        isSelected={selectedBackFlight?.id === flight.id}
                                        onSelect={setSelectedBackFlight}
                                    />
                                )))}
                                {
                                    noBackFlightsAvailable && (
                                        <div className="airline-message-no-flights">
                                            <p>Não foi encontrado nenhuma passagem nesta data {backDateFormated}.</p>
                                        </div>
                                    )
                                }
                            </div>
                        </>
                    )
                }
                <div className="airline-buttons">
                    <Link to="/">
                        <div className="airline-button">
                            <p>Voltar</p>
                        </div>
                    </Link>
                    {
                        tripType === "one-way" ? (
                            selectedGoingFlight ? (
                                <div onClick={handleClickConfirmation} className="airline-button">
                                    <p>Confirmar passagem</p>
                                </div>
                            ) : (
                                <div className="airline-button-off">
                                    <p>Confirmar passagem</p>
                                </div>
                            )
                        ) : tripType === "round-trip" ? (
                            selectedGoingFlight && selectedBackFlight ? (
                                <div onClick={handleClickConfirmation} className="airline-button">
                                    <p>Confirmar passagem</p>
                                </div>
                            ) : (
                                <div className="airline-button-off">
                                    <p>Confirmar passagem</p>
                                </div>
                            )
                        ) : null
                    }
                </div>
            </section>
        </main>
    )
}