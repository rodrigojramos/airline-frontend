import { useEffect, useState } from "react";
import { PlaneCard } from "../../../components/PlaneCard";
import { PlaneDTO } from "../../../models/plane";
import * as planeService from '../../../services/plane-service';
import { Link } from "react-router-dom";

export function Planes() {

    const [planes, setPlanes] = useState<PlaneDTO[]>([]);

    useEffect(() => {

        planeService.findAll()
            .then(response => {
                setPlanes(response.data);
            })
    }, [])

    return (
        <main className="airline-planes-main">
            <section className="airline-planes-section">
                <div className="airline-planes-title">
                    <h3>AVIÕES</h3>
                </div>
                <Link to="/admin/planes/new">
                    <div className="airline-planes-new-plane">
                        <p>Novo</p>
                    </div>
                </Link>
                
                {planes.map((plane => (
                    <PlaneCard key={plane.id} plane={plane} />
                )))}

            </section>
        </main>
    )
}