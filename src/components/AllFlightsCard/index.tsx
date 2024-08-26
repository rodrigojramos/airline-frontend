import { MoveRight, NotebookText, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export function AllFlightsCard() {
    return (
        <div className="airline-all-flights-card">
            <div className="airline-all-flights-destination">
                <p className="padding-right-10">Uberlândia</p>
                <MoveRight />
                <p className="padding-left-10">São Paulo</p>
            </div>
            <p>Horário: 15:30</p>
            <p>Lugares: 12/180</p>
            <div className="airline-all-flights-card-icons">
                <div className="airline-all-flights-card-icon">
                    <Link to="/admin/passenger-list">
                        <NotebookText />
                    </Link>
                </div>
                <div className="airline-all-flights-card-icon">
                    <Pencil />
                </div>
                <div className="airline-all-flights-card-icon">
                    <Trash2 />
                </div>
            </div>
        </div>
    )
}