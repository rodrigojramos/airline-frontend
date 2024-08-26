import { Pencil, Trash2 } from "lucide-react";

export function PlaneCard() {
    return (
        <div className="airline-planes-card">
            <p>ID: 1</p>
            <p>Embraer 195</p>
            <p>180 lugares</p>
            <div className="airline-planes-card-icons">
                <div className="airline-planes-card-icon">
                    <Pencil />
                </div>
                <div className="airline-planes-card-icon">
                    <Trash2 />
                </div>
            </div>
        </div>
    )
}