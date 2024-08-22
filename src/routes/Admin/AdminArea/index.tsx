import { NotebookText, Plane } from "lucide-react";
import { FlightCardAdmin } from "../../../components/FlightCardAdmin";


export function AdminArea() {
    return (
        <main className="airline-admin-area-main">
            <section className="airline-admin-area">
                <div className="airline-admin-area-title">
                    <h3>VOOS DO DIA</h3>
                </div>
                <div className="airline-admin-area-card">
                    <div className="airline-admin-area-title-card">
                        <Plane />
                        <h4>FLIGHT AIRLINE</h4>
                        <Plane />
                    </div>
                    <div className="airline-admin-area-flight-card">
                        <FlightCardAdmin />
                        <div className="airline-admin-area-list-flight-card">
                            <NotebookText />
                            <p>Lista de passageiros</p>
                        </div>
                    </div>
                </div>

                <div className="airline-admin-area-card">
                    <div className="airline-admin-area-title-card">
                        <Plane />
                        <h4>FLIGHT AIRLINE</h4>
                        <Plane />
                    </div>
                    <div className="airline-admin-area-flight-card">
                        <FlightCardAdmin />
                        <div className="airline-admin-area-list-flight-card">
                            <NotebookText />
                            <p>Lista de passageiros</p>
                        </div>
                    </div>
                </div>

                <div className="airline-admin-area-card">
                    <div className="airline-admin-area-title-card">
                        <Plane />
                        <h4>FLIGHT AIRLINE</h4>
                        <Plane />
                    </div>
                    <div className="airline-admin-area-flight-card">
                        <FlightCardAdmin />
                        <div className="airline-admin-area-list-flight-card">
                            <NotebookText />
                            <p>Lista de passageiros</p>
                        </div>
                    </div>
                </div>
                
            </section>
        </main>
    )
}