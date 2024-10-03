import { MoveRight, NotebookText, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FlightDTO } from "../../models/flight";
import { useState } from "react";
import * as flightService from '../../services/flight-service';
import { DialogInfo } from "../DialogInfo";
import { DialogConfirmation } from "../DialogConfirmation";

type Props = {
    flight: FlightDTO;
}

export function AllFlightsCard({ flight }: Props) {

    const navigate = useNavigate();

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Mensagem"
    })

    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        visible: false,
        id: 0,
        message: "Tem certeza?"
    })

    function handleDialogConfirmationAnswer(answer: boolean, flightId: number) {

        if(answer) {
            flightService.deleteById(flightId)
            .then(() => {
                window.location.reload();
            })
            .catch(() => {
                setDialogInfoData({
                    visible: true,
                    message: " Falha de intregridade referencial"
                })
            })
        }

        setDialogConfirmationData({ ...dialogConfirmationData, visible: false});
    }

    function handleDeleteClick(flightId: number) {
        setDialogConfirmationData({ ...dialogConfirmationData, id: flightId, visible: true});
    }

    function handleUpdateClick(flightId: number) {
        navigate(`/admin/flights/${flightId}`);
    }

    function handleDialogInfoClose() {
        setDialogInfoData({...dialogInfoData, visible: false});
    }

    const date = new Date(flight.flightDay);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;

    function handlePassengerListClick(flightId: number) {
        navigate(`/admin/passenger-list/${flightId}`)
    }

    return (
        <section>
            <div className="airline-all-flights-card">
                <div className="airline-all-flights-destination">
                    <p className="padding-right-10">{flight.departure}</p>
                    <MoveRight />
                    <p className="padding-left-10">{flight.arrival}</p>
                </div>
                <p>Horário: {time}</p>
                <p>Lugares livres: {flight.availableSeats}</p>
                <div className="airline-all-flights-card-icons">
                    <div className="airline-all-flights-card-icon">
                        <NotebookText onClick={() => handlePassengerListClick(flight.id)}/>
                    </div>
                    <div className="airline-all-flights-card-icon">
                        <Pencil onClick={() => handleUpdateClick(flight.id)} />
                    </div>
                    <div className="airline-all-flights-card-icon">
                        <Trash2 onClick={() => handleDeleteClick(flight.id)}/>
                    </div>
                </div>
            </div>

            {
                dialogInfoData.visible &&
                <DialogInfo 
                    message={dialogInfoData.message}
                    onDialogClose={handleDialogInfoClose}
                />
            }
            
            {
                dialogConfirmationData.visible &&
                <DialogConfirmation
                    message={dialogConfirmationData.message}
                    id={dialogConfirmationData.id}
                    onDialogAnswer={handleDialogConfirmationAnswer}
                />
            }

        </section>
        
    )
}