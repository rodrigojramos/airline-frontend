import { useEffect, useState } from "react";
import { AllFlightsCard } from "../../../components/AllFlightsCard";
import { FlightDTO } from "../../../models/flight";
import * as flightService from '../../../services/flight-service';
import { Link } from "react-router-dom";
import { SquareChevronLeft, SquareChevronRight } from "lucide-react";

export function AllFlights() {

    const [flights, setFlights] = useState<FlightDTO[]>([]);

    const [page, setPage] = useState<number>(0);

    const [totalPages, setTotalPages] = useState<number>(0);
    
    console.log(page);

    useEffect(() => {

        flightService.findAll(page)
            .then(response => {
                setFlights(response.data.content);
                setTotalPages(response.data.totalPages);
            })
    }, [page])

    function handleNextPage() {
        setPage(page + 1);
    }

    function handlePreviousPage() {
        setPage(page - 1);
    }

    return (
        <main className="airline-all-flights-main">
            <section className="airline-all-flights-section">
                <div className="airline-all-flights-title">
                    <h3>TODOS OS VOOS</h3>
                </div>
                <Link to="/admin/flights/new">
                    <div className="airline-all-flights-new-flight">
                        <p>Novo</p>
                    </div>
                </Link>
                {
                    flights.map((flight => (
<                       AllFlightsCard key={flight.id} flight={flight}/>
                )))}
                <div className="airline-button-pages">
                    {
                        page === 0 ? (
                            <SquareChevronLeft className="airline-button-previous-page-off"/>
                        ) : (
                            <SquareChevronLeft onClick={handlePreviousPage} className="airline-button-previous-page"/>
                        )
                    }
                    {
                        (totalPages -1) === page ? (
                            <SquareChevronRight className="airline-button-next-page-off" />
                        ) : (
                            <SquareChevronRight onClick={handleNextPage} className="airline-button-next-page" />
                        )
                    }
                </div>
            </section>
        </main>
    )
}