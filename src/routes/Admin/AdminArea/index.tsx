import { useEffect, useState } from "react";
import { FlightCardAdmin } from "../../../components/FlightCardAdmin";
import { UserDTO } from "../../../models/user";
import * as userService from "../../../services/user-service"

export function AdminArea() {

    const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        userService.findMe()
            .then(response => {
                setUser(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error", error);
            })
    }, [])

    return (
        <main className="airline-admin-area-main">
            <section className="airline-admin-area">
                <div className="airline-admin-area-title">
                    <div>
                        <p>Bem vindo à área administrativa {user?.name}</p>
                        <h4>VOOS DO DIA</h4>
                    </div>
                </div>
                <div className="airline-admin-area-card">
                    <FlightCardAdmin />
                </div>
            </section>
        </main>
    )
}