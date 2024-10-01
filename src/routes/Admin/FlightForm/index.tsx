import { Link, useParams } from "react-router-dom";
import * as forms from "../../../utils/forms";
import { useEffect, useState } from "react";
import { FormInput } from "../../../components/FormInput";
import * as flightService from "../../../services/flight-service";

export function FlightForm() {

    const params = useParams();

    const isEditing = params.flightId !== 'new';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [formData, setFormData] = useState<any>({
        departure: {
          value: "",
          id: "departure",
          name: "departure",
          type: "text",
          placeholder: "Origem",
        },
        arrival: {
            value: "",
            id: "arrival",
            name: "arrival",
            type: "text",
            placeholder: "Destino",
        },
        flightDay: {
            value: "",
            id: "flightDay",
            name: "flightDay",
            type: "datetime-local",
            placeholder: "Dia - Horário",
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
        },
        availableSeats : {
            value: "",
            id: "availableSeats",
            name: "availableSeats",
            type: "number",
            placeholder: "Assentos vagos",
        },
        plane : {
            value: "",
            id: "plane",
            name: "plane",
            type: "text",
            placeholder: "Avião",
        }
    })

    useEffect(() => {
        if (isEditing) {
            flightService.findById(Number(params.flightId))
                .then(response => {
                    setFormData(forms.updateAll(formData, response.data))
                })
        }
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleInputChange(event: any) {
        setFormData(forms.update(formData, event.target.name, event.target.value));
    }

    return (
        <section className="airline-form-section">
            <div className="airline-form">
                <h1>Cadastrar novo voo</h1>
                <FormInput
                    { ...formData.departure }
                    className="airline-form-input"
                    onChange={handleInputChange}
                />
                <FormInput
                    { ...formData.arrival }
                    className="airline-form-input"
                    onChange={handleInputChange}
                />
                <FormInput
                    { ...formData.price }
                    className="airline-form-input"
                    onChange={handleInputChange}
                />
                <FormInput
                    { ...formData.availableSeats }
                    className="airline-form-input"
                    onChange={handleInputChange}
                />
                <FormInput
                    { ...formData.plane }
                    className="airline-form-input"
                    onChange={handleInputChange}
                />
                <FormInput
                    { ...formData.flightDay }
                    className="airline-form-input"
                    onChange={handleInputChange}
                />
                <div className="airline-form-btns">
                    <Link to="/admin/flights">
                        <div className="airline-form-button-cancel">
                            Cancelar
                        </div>
                    </Link>
                    <div className="airline-form-button">
                        Salvar
                    </div>
                </div>
            </div>
        </section>
    )
}