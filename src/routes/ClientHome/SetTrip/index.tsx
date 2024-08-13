import { CalendarDays, PlaneLanding, PlaneTakeoff } from "lucide-react";

export function SetTrip() {
    return(
        <main className="airline-main">
            <div className="airline-card-reservation">
                <p>Qual será o seu destino? Reserve sua passagem!</p>
                <div>
                    <div>
                    <label className="airline-one-way-select">
                        <input type="radio" name="trip-type" />
                        <p>Só ida</p>
                    </label>
                    </div>
                    <div>
                    <label className="airline-round-trip-select">
                        <input type="radio" name="trip-type" />
                        <p>Ida e volta</p>
                    </label>
                    </div>
                </div>
                <div className="airline-destination-select">
                    <p>Origem:</p>
                    <PlaneTakeoff className="airline-icon-destination"/>
                    <input type="text" />
                    <div className="airline-destination-select-space">
                    <p>Destino:</p>
                    <PlaneLanding className="airline-icon-destination"/>
                    <input type="text" />
                    </div>
                    <p>Datas:</p>
                    <CalendarDays className="airline-icon-destination"/>
                    <input type="text" />
                </div>
            </div>
            <div className="airline-button">
                <p>Procurar passagem</p>
            </div>
        </main>
    )
}