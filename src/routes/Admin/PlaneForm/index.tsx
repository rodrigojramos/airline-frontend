export function PlaneForm() {
    return (
        <section className="airline-plane-form-section">
            <div className="airline-plane-form">
                <h1>Cadastrar novo avião</h1>
                <input type="text" placeholder="Nome"/>
                <input type="number" placeholder="Quantidade de assentos"/>
                <div className="airline-plane-form-button">
                    Salvar
                </div>
            </div>
        </section>
    )
}