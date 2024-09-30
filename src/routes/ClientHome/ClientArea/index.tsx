import { Pencil, Ticket } from "lucide-react";
import { MinFlightCard } from "../../../components/MinFlightCard";
import { Link } from "react-router-dom";

export function ClientArea() {
    return (
        <main className="airline-main-client">
            <section className="airline-section-client-data">
                <h3>SEUS DADOS</h3>
                <div className="airline-client-data-card">
                    <div className="airline-client-data">
                        <p>Nome:</p>
                        <input 
                            type="text" 
                            value="Rodrigo" 
                            id="disabledInput" 
                            disabled
                        />
                    </div>
                    <div className="airline-client-data">
                        <p>Email:</p>
                        <input 
                            type="text" 
                            value="rodrigo@gmail.com" 
                            id="disabledInput" 
                            disabled
                        />
                    </div>
                    <div className="airline-client-data">
                        <p>CPF:</p>
                        <input 
                            type="text" 
                            value="11122233399" 
                            id="disabledInput" 
                            disabled
                        />
                    </div>
                </div>
                <Link to="/client-area/personal-data">
                    <div className="airline-client-edit-data">
                        <p>Editar algum campo</p>
                        <Pencil className="airline-client-edit-data-icon"/>
                    </div>
                </Link>
            </section>
            <section className="airline-client-next-flights">
                <h3>SEUS PRÓXIMOS VOOS</h3>
                <div className="airline-client-next-flights-card">
                    <div className="airline-client-ticket">
                        <Ticket />
                        <h4>TICKET AIRLINE</h4>
                        <Ticket />
                    </div>
                    <div className="airline-client-checkin-div">
                        <MinFlightCard />
                        <Link to="/check-in">
                            <div className="airline-client-checkin-flight">
                                <h4>Check-in</h4>
                                <p>ON</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="airline-client-next-flights-card">
                    <div className="airline-client-ticket">
                        <Ticket />
                        <h4>TICKET AIRLINE</h4>
                        <Ticket />
                    </div>
                    <div className="airline-client-checkin-div">
                        <MinFlightCard />
                        <Link to="/check-in">
                            <div className="airline-client-checkin-flight">
                                <h4>Check-in</h4>
                                <p>ON</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </section>
        </main>
        
    )
}