import { PassengerCard } from "../../../components/PassengerCard";

export function PassengerList() {
    return(
        <main>
            <section className="airline-passenger-list-section">
                <div className="airline-passenger-list-title">
                    <h3>Lista de passageiros</h3>
                </div>
                <div className="airline-passenger-list-card">
                    <div>
                        <div className="airline-passenger-list-flight-reference">
                            <p>Voo ID: 1</p>
                            <div className="airline-passenger-list-flight-destination">
                                <p>Uberlândia</p>
                                <p>para</p>
                                <p>São Paulo</p>
                            </div>
                            <p>20/11/2012</p>
                            <p>15:30:00</p>
                        </div>
                        <div className="airline-passenger-list-flight">
                            <PassengerCard />
                            <PassengerCard />
                            <PassengerCard />
                            <PassengerCard />
                            <PassengerCard />
                            <PassengerCard />
                            <PassengerCard />
                            <PassengerCard />
                            <PassengerCard />
                            <PassengerCard />
                            <PassengerCard />
                            <PassengerCard />
                            <PassengerCard />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}