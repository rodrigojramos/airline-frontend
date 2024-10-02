/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import * as forms from "../../../utils/forms";
import { useEffect, useState } from "react";
import { FormInput } from "../../../components/FormInput";
import * as flightService from "../../../services/flight-service";
import * as planeService from "../../../services/plane-service";
import { PlaneDTO } from "../../../models/plane";
import { FormSelect } from "../../../components/FormSelect";

export function FlightForm() {

    const params = useParams();

    const isEditing = params.flightId !== 'new';

    const [plane, setPlane] = useState<PlaneDTO[]>([]);

    const [formData, setFormData] = useState<any>({
        departure: {
          value: "",
          id: "departure",
          name: "departure",
          type: "text",
          placeholder: "Origem",
          validation: function(value: string) {
            return value.length >= 3 && value.length <=30;
          },
          message: "Favor informar um lugar de 3 a 30 caracteres"
        },
        arrival: {
            value: "",
            id: "arrival",
            name: "arrival",
            type: "text",
            placeholder: "Destino",
            validation: function(value: string) {
                return value.length >= 3 && value.length <=30;
              },
              message: "Favor informar um lugar de 3 a 30 caracteres"
        },
        flightDay: {
            value: "",
            id: "flightDay",
            name: "flightDay",
            type: "datetime-local",
            placeholder: "Dia - Horário",
            validation: function(value: string) {
                const selectedDate = new Date(value);
                const currentDate = new Date();
                return selectedDate >= currentDate;
            },
            message: "A data e horário devem ser iguais ou posteriores ao momento atual"
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
            validation: function(value: any) {
                return Number(value) > 0;
              },
              message: "Favor informar um valor positivo"
        },
        availableSeats : {
            value: "",
            id: "availableSeats",
            name: "availableSeats",
            type: "number",
            placeholder: "Assentos vagos",
            validation: function(value: any) {
                return Number(value) >= 0;
              },
              message: "O número informado não pode ser negativo"
        },
        plane : {
            value: null as PlaneDTO | null,
            id: "plane",
            name: "plane",
            placeholder: "Avião",
            validation: function(value: PlaneDTO | null) {
                return value !== null;
            },
            message: "É necessário informar o avião"
        }
    })

    useEffect(() => {
        planeService.findAll()
            .then(response => {
                setPlane(response.data)
            })
    },[])

    useEffect(() => {
        if (isEditing) {
            flightService.findById(Number(params.flightId))
                .then(response => {
                    setFormData(forms.updateAll(formData, response.data))
                })
        }
    }, [])

    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }

    return (
        <section className="airline-form-section">
            <div className="airline-form">
                <h1>Cadastrar novo voo</h1>
                <FormInput
                    { ...formData.departure }
                    className="airline-form-input"
                    onChange={handleInputChange}
                    onTurnDirty={handleTurnDirty}
                />
                <p className="airline-form-error">{formData.departure.message}</p>
                <FormInput
                    { ...formData.arrival }
                    className="airline-form-input"
                    onChange={handleInputChange}
                    onTurnDirty={handleTurnDirty}
                />
                <p className="airline-form-error">{formData.arrival.message}</p>
                <FormInput
                    { ...formData.price }
                    className="airline-form-input"
                    onChange={handleInputChange}
                    onTurnDirty={handleTurnDirty}
                />
                <p className="airline-form-error">{formData.price.message}</p>
                <FormInput
                    { ...formData.availableSeats }
                    className="airline-form-input"
                    onChange={handleInputChange}
                    onTurnDirty={handleTurnDirty}
                />
                <p className="airline-form-error">{formData.availableSeats.message}</p>
                <FormSelect
                    { ...formData.plane}
                    className="airline-form-input"
                    options={plane} 
                    onChange={(obj: any) => {
                        const newFormData= forms.updateAndValidate(formData, "plane", obj);
                        setFormData(newFormData);

                    }}
                    getOptionLabel={(obj: any) => obj.name}
                    getOptionValue={(obj: any) => String(obj.id)}
                    onTurnDirty={handleTurnDirty}
                />
                <p className="airline-form-error">{formData.plane.message}</p>
                <FormInput
                    { ...formData.flightDay }
                    className="airline-form-input"
                    onChange={handleInputChange}
                    onTurnDirty={handleTurnDirty}
                />
                <p className="airline-form-error">{formData.flightDay.message}</p>
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