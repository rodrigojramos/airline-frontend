import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FormInput } from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import * as planeService from "../../../services/plane-service";

export function PlaneForm() {

    const params = useParams();

    const isEditing = params.planeId !== 'new';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [formData, setFormData] = useState<any>({
        name: {
          value: "",
          id: "name",
          name: "name",
          type: "text",
          placeholder: "Nome",
        },
        seats: {
            value: "",
            id: "seats",
            name: "seats",
            type: "number",
            placeholder: "Quantidade de assentos",
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleInputChange(event: any) {
        setFormData(forms.update(formData, event.target.name, event.target.value));
    }

    return (
        <section className="airline-form-section">
            <div className="airline-form">
                <h1>Cadastrar novo avião</h1>
                <FormInput
                    { ...formData.name }
                    className="airline-form-input"
                    onChange={handleInputChange}
                />
                <FormInput
                    { ...formData.seats }
                    className="airline-form-input"
                    onChange={handleInputChange}
                />
                <div className="airline-form-btns">
                    <Link to="/admin/planes">
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