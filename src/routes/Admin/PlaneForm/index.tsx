export function PlaneForm() {
    return (
        <section className="airline-form-section">
            <div className="airline-form">
                <h1>Cadastrar novo avião</h1>
                <input type="text" placeholder="Nome"/>
                <input type="number" placeholder="Quantidade de assentos"/>
                <div className="airline-form-button">
                    Salvar
                </div>
            </div>
        </section>
    )
}