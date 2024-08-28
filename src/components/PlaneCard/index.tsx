import { Pencil, Trash2 } from "lucide-react";
import { PlaneDTO } from "../../models/plane";
import { useState } from "react";
import { DialogConfirmation } from "../DialogConfirmation";
import * as planeService from '../../services/plane-service';
import { DialogInfo } from "../DialogInfo";

type Props = {
    plane: PlaneDTO;
}

export function PlaneCard({ plane }: Props) {

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Mensagem"
    })

    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        visible: false,
        id: 0,
        message: "Tem certeza?"
    })

    function handleDialogConfirmationAnswer(answer: boolean, planeId: number) {

        if(answer) {
            planeService.deleteById(planeId)
            .then(() => {
                window.location.reload();
            })
            .catch(error => {
                setDialogInfoData({
                    visible: true,
                    message: error.response.data.error
                })
            })
        }

        setDialogConfirmationData({ ...dialogConfirmationData, visible: false});
    }

    function handleDeleteClick(planeId: number) {
        setDialogConfirmationData({ ...dialogConfirmationData, id: planeId, visible: true});
    }

    function handleDialogInfoClose() {
        setDialogInfoData({...dialogInfoData, visible: false});
    }

    return (
        <main>
            <section>
                <div className="airline-planes-card">
                    <p>ID: {plane.id}</p>
                    <div className="airline-planes-card-name-and-seats">
                        <p>{plane.name}</p>
                    </div>
                    <div className="airline-planes-card-name-and-seats">
                        <p>{plane.seats} lugares</p>
                    </div>
                    <div className="airline-planes-card-icons">
                        <div className="airline-planes-card-icon">
                            <Pencil />
                        </div>
                        <div className="airline-planes-card-icon">
                            <Trash2 onClick={() => handleDeleteClick(plane.id)}/>
                        </div>
                    </div>
                </div>
            </section>

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
        </main>  
    )
}