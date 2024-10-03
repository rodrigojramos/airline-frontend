/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FormInput } from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import * as planeService from "../../../services/plane-service";

export function PlaneForm() {

    const params = useParams();

    const navigate = useNavigate();

    const isEditing = params.planeId !== 'new';

    const [formData, setFormData] = useState<any>({
        name: {
          value: "",
          id: "name",
          name: "name",
          type: "text",
          placeholder: "Nome",
          validation: function(value: string) {
            return value.length >= 3 && value.length <=30;
          },
          message: "Favor informar um nome de 3 a 30 caracteres"
        },
        seats: {
            value: "",
            id: "seats",
            name: "seats",
            type: "number",
            placeholder: "Quantidade de assentos",
            validation: function(value: any) {
                return Number(value) > 0;
              },
              message: "Favor informar um valor positivo"
          }
    })

    useEffect(() => {
        if (isEditing) {
            planeService.findById(Number(params.planeId))
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

    function handleSubmit(event: any) {
        event.preventDefault();

        const formDataValidated = forms.dirtyAndValidateAll(formData);

        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }

        const requestBody = forms.toValues(formData);

        if(isEditing) {
            requestBody.id = params.planeId;
        }

        const request = isEditing 
            ? planeService.updateRequest(requestBody)
            : planeService.insertRequest(requestBody);

        request
            .then(() => {
                navigate("/admin/planes");
            })
    }

    return (
        <section className="airline-form-section">
            <form onSubmit={handleSubmit}>
                <div className="airline-form">
                    <h1>Cadastrar novo avião</h1>
                    <FormInput
                        { ...formData.name }
                        onTurnDirty={handleTurnDirty}
                        className="airline-form-input"
                        onChange={handleInputChange}
                    />
                    <p className="airline-form-error">{formData.name.message}</p>
                    <FormInput
                        { ...formData.seats }
                        onTurnDirty={handleTurnDirty}
                        className="airline-form-input"
                        onChange={handleInputChange}
                    />
                    <p className="airline-form-error">{formData.seats.message}</p>
                    <div className="airline-form-btns">
                        <Link to="/admin/planes">
                            <button className="airline-form-button-cancel">
                                Cancelar
                            </button>
                        </Link>
                        <button type="submit" className="airline-form-button">
                            Salvar
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}