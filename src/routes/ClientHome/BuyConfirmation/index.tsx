import { Link } from "react-router-dom"

export function BuyConfirmation() {
    return (
        <main>
            <div className="airline-buy-confirmation-text">
                <p>Sua compra foi realizada com sucesso!</p>
                <p>Obrigado por escolher Airline!</p>
                <Link to="/">
                    <div className="airline-buy-confirmarion-button">
                        Início
                    </div>
                </Link>
            </div>
        </main>
    )
}