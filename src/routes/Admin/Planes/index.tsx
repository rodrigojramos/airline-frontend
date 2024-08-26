import { PlaneCard } from "../../../components/PlaneCard";


export function Planes() {
    return (
        <main className="airline-planes-main">
            <section className="airline-planes-section">
                <div className="airline-planes-title">
                    <h3>AVIÕES</h3>
                </div>
                <div className="airline-planes-new-plane">
                    <p>Criar</p>
                </div>
                <PlaneCard />
                <PlaneCard />
                <PlaneCard />
                <PlaneCard />
                <PlaneCard />
            </section>
        </main>
    )
}