import { Link } from "react-router-dom"

export function ClientForm() {
    return (
        <section className="airline-form-section">
            <div className="airline-form">
                <h1>Alterar dados pessoais</h1>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="CPF"/>
                <div className="airline-form-btns">
                    <Link to="/client-area">
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