import { TicketDTO } from "../../models/ticket";

type Props = {
    ticket: TicketDTO;
}

export function PassengerCard({ ticket }: Props) {

    function formatCPF(cpf: string): string {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    return(
        <div className="airline-passenger-list-card-name">
            <div className="airline-passenger-list-name">
                <p>{ticket.passenger.name}</p>
                <p>{formatCPF(ticket.passenger.document)}</p>
                <p>Assento: {ticket.seat ? ticket.seat : "Não definido"}</p>
            </div>
        </div>
    )
}