import { ArrowBigRight } from "lucide-react";
import { FlightCard } from "../../../components/FlightCard";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FlightDTO } from "../../../models/flight";
import * as flightService from "../../../services/flight-service";

type LocationState = {
    origin: string;
    destination: string;
    goingDate: string;
    backDate: string;
    tripType: 'one-way' | 'round-trip';
};

export function Flights() {

    const location = useLocation();
    
    const { origin, destination, goingDate, backDate, tripType } = location.state as LocationState;

    const [year1, month1, day1] = goingDate.split('-');

    const goingDateFormated = `${day1}/${month1}/${year1}`;

    const [year2, month2, day2] = backDate.split('-');

    const backDateFormated = `${day2}/${month2}/${year2}`;

    const [flights, setFlights] = useState<FlightDTO[]>([]);

    const [backFlights, setBackFlights] = useState<FlightDTO[]>([]);

    const [selectedGoingFlight, setSelectedGoingFlight] = useState<FlightDTO | null>(null);
    
    const [selectedBackFlight, setSelectedBackFlight] = useState<FlightDTO | null>(null);

    function handleClickConfirmation() {
        if (tripType === 'one-way') {
            console.log("Voo de ida selecionado:", selectedGoingFlight);
        } else {
            console.log("Voo de ida selecionado:", selectedGoingFlight);
            console.log("Voo de volta selecionado:", selectedBackFlight);
        }
    }

    useEffect(() => {

        flightService.findFlightsByDateAndDestination(origin, destination, Number(day1), Number(month1), Number(year1))
            .then(response => {
                setFlights(response.data);
            })
    }, [])

    useEffect(() => {

        flightService.findFlightsByDateAndDestination(destination, origin, Number(day2), Number(month2), Number(year2))
            .then(response => {
                setBackFlights(response.data);
            })
    }, [])

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
                            </div>
                        </>
                    )
                }
                <Link to="/payment">
                    <div onClick={handleClickConfirmation} className="airline-button">
                        <p>Confirmar passagem</p>
                    </div>
                </Link>
            </section>
        </main>
    )
}