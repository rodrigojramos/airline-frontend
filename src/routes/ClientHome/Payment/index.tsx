import { FlightCard } from "../../../components/FlightCard";

export function Payment() {
    return(
        <main>
            <section className="airline-payment-section">
                <div className="airline-payment-text">
                    <p>Confirme abaixo suas passagens selecionadas!</p>
                </div>
                <FlightCard />
                <FlightCard />
                <div className="airline-payment-value-total">
                    <p>Total: R$1.400,00</p>
                </div>
                <div className="airline-payment-text">
                    <p>Confirme abaixo se seus dados estão corretos!</p>
                </div>
                <div className="airline-payment-personal-data">
                    <p>Nome:</p>
                    <input type="text" />
                    <p className="padding-top-10">CPF:</p>
                    <input type="text" />
                </div>
                <div className="airline-button">
                    <p>Confirmar pagamento</p>
                </div>
            </section>
        </main>
    )
}