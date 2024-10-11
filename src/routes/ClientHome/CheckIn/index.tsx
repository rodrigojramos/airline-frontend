import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as ticketService from "../../../services/ticket-service";
import { TicketDTO } from "../../../models/ticket";
import { PlaneDTO } from "../../../models/plane";
import { Link } from "react-router-dom";

type LocationState = {
  plane: PlaneDTO;
};

export function CheckIn() {

  const params = useParams();

  const navigate = useNavigate();

  const isEditing = params.ticketId !== "";

  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const [ticket, setTicket] = useState<TicketDTO | null>(null);

  const [occupiedSeats, setOccupiedSeats] = useState<string[]>([]);

  const location = useLocation();

  const { plane } = location.state as LocationState;

  useEffect(() => {
    if (isEditing) {
      ticketService.findById(Number(params.ticketId)).then((response) => {
        setTicket(response.data);
      });
    }
  }, [isEditing, params.ticketId]);

  useEffect(() => {
    if (ticket?.flights?.[0]?.id) {
      ticketService.findOccupiedSeatsByFlightId(Number(ticket.flights[0].id))
        .then((response) => {
          const filteredSeats = response.data.filter((seat: string) => seat !== "");
          setOccupiedSeats(filteredSeats);
        });
    }
  }, [ticket?.flights]);

  function handleSeatClick(seat: string) {
    if (!occupiedSeats.includes(seat)) {
      setSelectedSeat(seat);
    }
  }

  function handleConfirmSeat() {
    if (ticket && selectedSeat) {
      const updateTicket = { ...ticket, seat: selectedSeat };
      ticketService.updateRequest(updateTicket)
        .then(() => {
          navigate("/client-area");
      });
    }
  }

  const seatRowsAtr = [
    [["1A", "1B"], ["1C", "1D"]],
    [["2A", "2B"], ["2C", "2D"]],
    [["3A", "3B"], ["3C", "3D"]],
    [["4A", "4B"], ["4C", "4D"]],
  ];

  const seatRowsEmbraer = [
    [["1A", "1B"], ["1C", "1D"]],
    [["2A", "2B"], ["2C", "2D"]],
    [["3A", "3B"], ["3C", "3D"]],
    [["4A", "4B"], ["4C", "4D"]],
    [["5A", "5B"], ["5C", "5D"]],
    [["6A", "6B"], ["6C", "6D"]],
  ];

  const seatRowsAirbus = [
    [["1A", "1B"], ["1C", "1D"]],
    [["2A", "2B"], ["2C", "2D"]],
    [["3A", "3B"], ["3C", "3D"]],
    [["4A", "4B"], ["4C", "4D"]],
    [["5A", "5B"], ["5C", "5D"]],
    [["6A", "6B"], ["6C", "6D"]],
    [["7A", "7B"], ["7C", "7D"]],
    [["8A", "8B"], ["8C", "8D"]],
  ];

  return (
    <main>
      <section className="airline-section-checkin-plane">
        <div className="airline-title-checkin-plane">
          <h1>CHECK-IN</h1>
          <h4>Escolha seu lugar:</h4>
        </div>
        <div className="airline-seats">
          {plane.name === "ATR" &&
            seatRowsAtr.map((row, rowIndex) => (
              <div key={rowIndex} className="airline-plane-seats-row">
                {row.map((display, displayIndex) => (
                  <div
                    key={displayIndex}
                    className="airline-plane-seats-row-display"
                  >
                    {display.map((seat) => (
                      <div
                        key={seat}
                        className={`airline-plane-seats ${
                          selectedSeat === seat ? "selected" : ""
                        } ${occupiedSeats.includes(seat) ? "occupied" : ""}`}
                        onClick={() => handleSeatClick(seat)}
                      >
                        {seat}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            {plane.name === "Embraer" &&
            seatRowsEmbraer.map((row, rowIndex) => (
              <div key={rowIndex} className="airline-plane-seats-row">
                {row.map((display, displayIndex) => (
                  <div
                    key={displayIndex}
                    className="airline-plane-seats-row-display"
                  >
                    {display.map((seat) => (
                      <div
                        key={seat}
                        className={`airline-plane-seats ${
                          selectedSeat === seat ? "selected" : ""
                        } ${occupiedSeats.includes(seat) ? "occupied" : ""}`}
                        onClick={() => handleSeatClick(seat)}
                      >
                        {seat}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            {plane.name === "Airbus" &&
            seatRowsAirbus.map((row, rowIndex) => (
              <div key={rowIndex} className="airline-plane-seats-row">
                {row.map((display, displayIndex) => (
                  <div
                    key={displayIndex}
                    className="airline-plane-seats-row-display"
                  >
                    {display.map((seat) => (
                      <div
                        key={seat}
                        className={`airline-plane-seats ${
                          selectedSeat === seat ? "selected" : ""
                        } ${occupiedSeats.includes(seat) ? "occupied" : ""}`}
                        onClick={() => handleSeatClick(seat)}
                      >
                        {seat}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
        </div>
        {selectedSeat && (
          <div className="airline-confirmation-seat-message">
            Assento selecionado:
            <p>{selectedSeat}</p>
          </div>
        )}
        <div className="airline-confirmation-seat-buttons">
          <Link to="/client-area">
            <div className="airline-confirmation-seat-button">Voltar</div>
          </Link>
          <div
            onClick={handleConfirmSeat}
            className={`airline-confirmation-seat-button ${
              !selectedSeat ? "airline-confirmation-seat-button-off" : ""
            }`}
          >
            Confirmar
          </div>
        </div>
      </section>
    </main>
  );
}
