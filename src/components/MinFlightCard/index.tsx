import { Check, MoveRight, Ticket, TicketCheck } from "lucide-react";
import { TicketDTO } from "../../models/ticket";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Props = {
  ticket: TicketDTO;
};

export function MinFlightCard({ ticket }: Props) {

  const navigate = useNavigate();

  const [isCheckInAvailable, setIsCheckInAvailable] = useState(false);

  const [oldPassage, setOldPassage] = useState(false);

  const [chosenSeat, setChosenSeat] = useState(false);
  
  const plane = ticket.flights[0]?.plane;

  useEffect(() => {
    const currentDateTime = new Date();

    const flightDate = new Date(ticket.flights[0]?.flightDay);

    const timeDifference = flightDate.getTime() - currentDateTime.getTime();

    const hoursDifference = timeDifference / (1000 * 60 * 60);

    setOldPassage(hoursDifference <= 0);
    setIsCheckInAvailable(hoursDifference <= 72 && hoursDifference > 0);
  },[ticket.flights])

  useEffect(() => {
    if(ticket.seat !== null) {
      setChosenSeat(true);
    }
  },[ticket.seat])

  function handleClickCheckIn() {
    navigate(`/client-area/${ticket.id}`, {
      state: {
        plane,
      }
    })
  }

  return (
    <div className="airline-client-next-flights-card">
      <div className="airline-client-ticket">
        {
          ticket.seat ? (
            <>
              <TicketCheck />
                <h4>TICKET AIRLINE</h4>
              <TicketCheck />
            </>
          ) : (
            <>
              <Ticket />
                <h4>TICKET AIRLINE</h4>
              <Ticket />
            </>
          )
        }
      </div>
      <div className="airline-client-checkin-div">
        {ticket.flights.map((flight) => (
          <div key={flight.id} className="airline-flight-min-card-details">
            <div className="airline-flight-card-destination">
              <p className="padding-right-10">{flight.departure}</p>
              <MoveRight />
              <p className="padding-left-10">{flight.arrival}</p>
            </div>
            <div className="airline-flight-min-card-time">
              <p>{new Date(flight.flightDay).toLocaleDateString()}</p>
              <p>Horário: {new Date(flight.flightDay).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
            </div>
            <p className="airline-flight-min-card-seat">Poltrona: {ticket.seat || '--'}</p>
          </div>
        ))}
        {
          isCheckInAvailable ? (
              chosenSeat && ticket.seat ? (
                <div className="airline-client-checkin-flight-done">
                  <h4>Check-in</h4>
                  <div className="airline-client-checkin-done">
                    <p>Realizado</p>
                    <Check />
                  </div>
                </div>
              ) : (
                <div onClick={handleClickCheckIn} className="airline-client-checkin-flight-on">
                  <h4>Check-in</h4>
                  <p>ON</p>
                </div>
              )
          ) : (
            oldPassage ? (
              <div className="airline-client-checkin-flight-off">
                <h4>Passagem</h4>
                <p>Antiga</p>
              </div>
            ) : (
              <div className="airline-client-checkin-flight-off">
                <h4>Check-in</h4>
                <p>OFF</p>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}
