import { AllFlightsCard } from "../../../components/AllFlightsCard";

export function AllFlights() {
    return (
        <main className="airline-all-flights-main">
            <section className="airline-all-flights-section">
                <div className="airline-all-flights-title">
                    <h3>TODOS OS VOOS</h3>
                </div>
                <div className="airline-all-flights-new-flight">
                    <p>Criar</p>
                </div>
                <AllFlightsCard />
                <AllFlightsCard />
                <AllFlightsCard />
                <AllFlightsCard />
                <AllFlightsCard />
                <AllFlightsCard />
            </section>
        </main>
    )
}