import { MinFlightCard } from "../../../components/MinFlightCard";
import { useEffect, useState } from "react";
import { UserDTO } from "../../../models/user";
import * as userService from "../../../services/user-service";
import { TicketDTO } from "../../../models/ticket";
import * as ticketService from "../../../services/ticket-service";

export function ClientArea() {
  
  const [user, setUser] = useState<UserDTO>();

  const [tickets, setTickets] = useState<TicketDTO[]>([]);

  useEffect(() => {
    userService
      .findMe()
      .then((response) => {
        const userData = response.data;
        setUser(userData);

        return ticketService.getTicketsByUserId(userData.id);
      })
      .then((ticketResponse) => {
        setTickets(ticketResponse.data);
      });
  }, []);

  function formatCPF(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  return (
    <main className="airline-main-client">
      <section className="airline-section-client-data">
        <h3>SEUS DADOS</h3>
        <div className="airline-client-data-card">
          <div className="airline-client-data">
            <p>Nome:</p>
            <input 
              type="text" 
              value={user?.name || ""} 
              id="disabledInput" 
              disabled 
            />
          </div>
          <div className="airline-client-data">
            <p>Email:</p>
            <input
              type="text"
              value={user?.email || ""}
              id="disabledInput"
              disabled
            />
          </div>
          <div className="airline-client-data">
            <p>CPF:</p>
            <input
              type="text"
              value={user?.document ? formatCPF(user.document) : ""}
              id="disabledInput"
              disabled
            />
          </div>
        </div>
      </section>
      <section className="airline-client-next-flights">
        <h3>SEUS PRÓXIMOS VOOS</h3>
        {tickets.map((ticket) => (
          <MinFlightCard key={ticket.id} ticket={ticket} />
        ))}
      </section>
    </main>
  );
}
