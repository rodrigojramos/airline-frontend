import { UserDTO } from "../../models/user";

type Props = {
    passenger: UserDTO;
}

export function PassengerCard({ passenger }: Props) {

    return(
        <div className="airline-passenger-list-card-name">
            <div className="airline-passenger-list-name">
                <p>{passenger.name}</p>
                <p>CPF: {passenger.document}</p>
                <p>Poltrona: 9C</p>
            </div>
        </div>
    )
}