import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as ticketService from "../../../services/ticket-service";
import { TicketDTO } from "../../../models/ticket";

export function CheckIn() {
  
  const params = useParams();

  const navigate = useNavigate();

  const isEditing = params.ticketId !== "";

  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const [ticket, setTicket] = useState<TicketDTO | null>(null);

  useEffect(() => {
    if (isEditing) {
        ticketService.findById(Number(params.ticketId))
            .then(response => {
                setTicket(response.data);
                console.log(ticket);
            })
    }
}, [isEditing, params.ticketId]);

  function handleSeatClick(seat: string) {
    console.log(seat);
    setSelectedSeat(seat);
  }

  function handleConfirmSeat() {
    if(ticket && selectedSeat) {
        const updateTicket = { ...ticket, seat: selectedSeat };
        ticketService.updateRequest(updateTicket)
            .then(response => {
                console.log(response.data);
                navigate("/client-area");
            })
    }
  }

  return (
    <main>
      <section className="airline-section-checkin-plane">
        <div className="airline-title-checkin-plane">
          <h1>CHECK-IN</h1>
          <h4>Rodrigo, escolha seu lugar:</h4>
        </div>
        <div className="airline-seats">
          <div className="airline-plane-seats-row">
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "1A" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("1A")}
              >
                1A
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "1B" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("1B")}
              >
                1B
              </div>
            </div>
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "1C" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("1C")}
              >
                1C
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "1D" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("1D")}
              >
                1D
              </div>
            </div>
          </div>
          <div className="airline-plane-seats-row">
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "2A" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("2A")}
              >
                2A
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "2B" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("2B")}
              >
                2B
              </div>
            </div>
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "2C" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("2C")}
              >
                2C
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "2D" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("2D")}
              >
                2D
              </div>
            </div>
          </div>
          <div className="airline-plane-seats-row">
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "3A" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("3A")}
              >
                3A
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "3B" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("3B")}
              >
                3B
              </div>
            </div>
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "3C" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("3C")}
              >
                3C
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "3D" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("3D")}
              >
                3D
              </div>
            </div>
          </div>
          <div className="airline-plane-seats-row">
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "4A" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("4A")}
              >
                4A
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "4B" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("4B")}
              >
                4B
              </div>
            </div>
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "4C" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("4C")}
              >
                4C
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "4D" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("4D")}
              >
                4D
              </div>
            </div>
          </div>
          <div className="airline-plane-seats-row">
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "5A" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("5A")}
              >
                5A
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "5B" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("5B")}
              >
                5B
              </div>
            </div>
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "5C" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("5C")}
              >
                5C
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "5D" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("5D")}
              >
                5D
              </div>
            </div>
          </div>
          <div className="airline-plane-seats-row">
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "6A" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("6A")}
              >
                6A
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "6B" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("6B")}
              >
                6B
              </div>
            </div>
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "6C" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("6C")}
              >
                6C
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "6D" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("6D")}
              >
                6D
              </div>
            </div>
          </div>
          <div className="airline-plane-seats-row">
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "7A" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("7A")}
              >
                7A
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "7B" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("7B")}
              >
                7B
              </div>
            </div>
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "7C" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("7C")}
              >
                7C
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "7D" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("7D")}
              >
                7D
              </div>
            </div>
          </div>
          <div className="airline-plane-seats-row">
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "8A" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("8A")}
              >
                8A
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "8B" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("8B")}
              >
                8B
              </div>
            </div>
            <div className="airline-plane-seats-row-display">
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "8C" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("8C")}
              >
                8C
              </div>
              <div
                className={`airline-plane-seats ${
                  selectedSeat === "8D" ? "selected" : ""
                }`}
                onClick={() => handleSeatClick("8D")}
              >
                8D
              </div>
            </div>
          </div>
        </div>
        {
            selectedSeat && (
                <div className="airline-confirmation-seat-message">
                    Assento selecionado:
                    <p>{selectedSeat}</p>
                </div>
            )
        }
        <div onClick={handleConfirmSeat} className="airline-confirmation-seat-button">Confirmar</div>
      </section>
    </main>
  );
}
