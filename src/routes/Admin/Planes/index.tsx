import { useEffect, useState } from "react";
import { PlaneCard } from "../../../components/PlaneCard";
import { PlaneDTO } from "../../../models/plane";
import * as planeService from '../../../services/plane-service';

export function Planes() {

    const [planes, setPlanes] = useState<PlaneDTO[]>([]);

    useEffect(() => {

        planeService.findAll()
            .then(response => {
                console.log(response);
                setPlanes(response.data);
            })
    }, [])

    return (
        <main className="airline-planes-main">
            <section className="airline-planes-section">
                <div className="airline-planes-title">
                    <h3>AVIÕES</h3>
                </div>
                <div className="airline-planes-new-plane">
                    <p>Criar</p>
                </div>

                {planes.map((plane => (
                    <PlaneCard key={plane.id} plane={plane} />
                )))}

            </section>
        </main>
    )
}