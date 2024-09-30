export function FlightForm() {
    return (
        <section className="airline-form-section">
            <div className="airline-form">
                <h1>Cadastrar novo voo</h1>
                <input type="text" placeholder="Origem"/>
                <input type="text" placeholder="Destino"/>
                <input type="text" placeholder="Valor"/>
                <input type="text" placeholder="Avião"/>
                <input type="text" placeholder="Número de assentos"/>
                <input type="datetime-local" placeholder="Data"/>
                <div className="airline-form-button">
                    Salvar
                </div>
            </div>
        </section>
    )
}