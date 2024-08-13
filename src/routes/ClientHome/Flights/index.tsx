import { ArrowBigRight } from "lucide-react";
import { FlightCard } from "../../../components/FlightCard";

export function Flights() {
    return (
        <main className="airline-main-flights">
            <section className="airline-section-flights">
                <div className="airline-flights-details">
                    <h3>VOOS DE IDA DISPONIVÉIS</h3>
                    <div className="airline-flights-destination">
                        <p>Uberlândia</p>
                        <ArrowBigRight />
                        <p>São Paulo</p>
                    </div>
                    <p>20/11/2024</p>
                </div>
                <div className="airline-flight-card">
                    <FlightCard />
                    <FlightCard />
                    <FlightCard />
                </div>

                <div className="airline-flights-details">
                    <h3>VOOS DE VOLTA DISPONIVÉIS</h3>
                    <div className="airline-flights-destination">
                        <p>São Paulo</p>
                        <ArrowBigRight />
                        <p>Uberlândia</p>
                    </div>
                    <p>21/12/2024</p>
                </div>
                <div className="airline-flight-card">
                    <FlightCard />
                    <FlightCard />
                    <FlightCard />
                </div>
                <div className="airline-button">
                    <p>Confirmar passagem</p>
                </div>
            </section>
        </main>
    )
}