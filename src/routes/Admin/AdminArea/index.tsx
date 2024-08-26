import { FlightCardAdmin } from "../../../components/FlightCardAdmin";


export function AdminArea() {
    return (
        <main className="airline-admin-area-main">
            <section className="airline-admin-area">
                <div className="airline-admin-area-title">
                    <h4>VOOS DO DIA</h4>
                </div>
                <div className="airline-admin-area-card">
                    <FlightCardAdmin />
                </div>
            </section>
        </main>
    )
}