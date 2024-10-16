import { useLocation, useNavigate } from "react-router-dom";
import { FlightDTO } from "../../../models/flight";
import { MoveRight } from "lucide-react";
import { UserDTO } from "../../../models/user";
import { useEffect, useState } from "react";
import * as userService from "../../../services/user-service";
import * as ticketService from "../../../services/ticket-service";
import { TicketDTO } from "../../../models/ticket";
import { Link } from "react-router-dom";

type LocationState = {
    selectedGoingFlight: FlightDTO;
    selectedBackFlight: FlightDTO;
    tripType: 'one-way' | 'round-trip';
};

export function Payment() {

    const navigate = useNavigate();

    const location = useLocation();

    const { selectedGoingFlight, selectedBackFlight, tripType } = location.state as LocationState;

    const goingDate = selectedGoingFlight ? new Date(selectedGoingFlight.flightDay) : null;
    const backDate = selectedBackFlight ? new Date(selectedBackFlight.flightDay) : null;

    const goingHours = goingDate ? String(goingDate.getHours()).padStart(2, '0') : "00";
    const goingMinutes = goingDate ? String(goingDate.getMinutes()).padStart(2, '0') : "00";
    const goingTime = `${goingHours}:${goingMinutes}`;

    const goingDay = goingDate ? String(goingDate.getDate()).padStart(2, '0') : "00";
    const goingMonth = goingDate ? String(goingDate.getMonth() + 1).padStart(2, '0') : "00";
    const goingYear = goingDate ? goingDate.getFullYear() : "0000";
    const goingFormattedDate = `${goingDay}/${goingMonth}/${goingYear}`;

    const backHours = backDate ? String(backDate.getHours()).padStart(2, '0') : "00";
    const backMinutes = backDate ? String(backDate.getMinutes()).padStart(2, '0') : "00";
    const backTime = `${backHours}:${backMinutes}`;

    const backDay = backDate ? String(backDate.getDate()).padStart(2, '0') : "00";
    const backMonth = backDate ? String(backDate.getMonth() + 1).padStart(2, '0') : "00";
    const backYear = backDate ? backDate.getFullYear() : "0000";
    const backFormattedDate = `${backDay}/${backMonth}/${backYear}`;

    const priceTotal = selectedBackFlight 
    ? selectedGoingFlight.price + selectedBackFlight.price 
    : selectedGoingFlight.price;

    const formattedPriceTotal = priceTotal.toFixed(2);

    const [user, setUser] = useState<UserDTO>();

    const [messageDuplicateFlight, setMessageDuplicateFlight] = useState<string>("");

    const [isFlightDuplicated, setIsFlightDuplicate] = useState<boolean>(false);

    useEffect(() => {
        userService.findMe()
            .then(response => {
                setUser(response.data);
        })
    }, [])

    useEffect(() => {
        if (user) {
            ticketService.getTicketsByUserId(Number(user.id))
                .then(response => {
                    const userTickets = response.data;
    
                    const isGoingFlightAlreadyBought = userTickets.some((ticket: TicketDTO) =>
                        ticket.flights.some(flight => flight.id === selectedGoingFlight.id)
                    );
    
                    const isBackFlightAlreadyBought = selectedBackFlight 
                        ? userTickets.some((ticket: TicketDTO) =>
                            ticket.flights.some(flight => flight.id === selectedBackFlight.id)
                          )
                        : false;
    
                    if (isGoingFlightAlreadyBought && isBackFlightAlreadyBought) {
                        setMessageDuplicateFlight("Você já comprou ambas passagens.");
                        setIsFlightDuplicate(true);
                    } else if (isGoingFlightAlreadyBought) {
                        setMessageDuplicateFlight("Você já comprou este voo de ida");
                        setIsFlightDuplicate(true);
                    } else if (isBackFlightAlreadyBought) {
                        setMessageDuplicateFlight("Você já comprou este voo de volta");
                        setIsFlightDuplicate(true);
                    } else {
                        setIsFlightDuplicate(false);
                    }
                });
        }
    }, [user, selectedGoingFlight, selectedBackFlight]);

    function handleConfirmationPayment() {
        if (user) {
            const goingTicket: TicketDTO = {
                id: 0,
                seat: "",
                passenger: user,
                flights: [selectedGoingFlight],
            };
    
            ticketService.insertRequest(goingTicket)
                .then(() => {
                    console.log("Ticket de ida inserido com sucesso");
                    console.log(goingTicket);
    
                    if (selectedBackFlight) {
                        const backTicket: TicketDTO = {
                            id: 0,
                            seat: "",
                            passenger: user,
                            flights: [selectedBackFlight],
                        };
    
                        return ticketService.insertRequest(backTicket)
                            .then(() => {
                                console.log("Ticket de volta inserido com sucesso");
                                console.log(backTicket);
                            });
                    }
                })
                .then(() => {
                    navigate("/buy-confirmation");
                });
        }
    }

    return(
        <main>
            <section className="airline-payment-section">
                <div className="airline-payment-text">
                    <p>Confirme abaixo suas passagens selecionadas!</p>
                </div>
                {
                    tripType == "round-trip" ? (
                        <>
                        <div className="airline-flight-selected-card-details">
                            <div className="airline-flight-card-destination">
                                <p className="padding-right-10">{selectedGoingFlight.departure}</p>
                                <MoveRight />
                                <p className="padding-left-10">{selectedGoingFlight.arrival}</p>
                            </div>
                            <div className="airline-flight-selected-date-and-time">
                                <p>{goingFormattedDate}</p>
                                <p>Horário: {goingTime}</p>
                            </div>
                            <p>R${selectedGoingFlight.price}</p>
                        </div>
                        <div className="airline-flight-selected-card-details">
                            <div className="airline-flight-card-destination">
                                <p className="padding-right-10">{selectedBackFlight.departure}</p>
                                <MoveRight />
                                <p className="padding-left-10">{selectedBackFlight.arrival}</p>
                            </div>
                            <div className="airline-flight-selected-date-and-time">
                                <p>{backFormattedDate}</p>
                                <p>Horário: {backTime}</p>
                            </div>
                            <p>R${selectedBackFlight.price}</p>
                        </div>
                        </>
                    ) : (
                        <>
                        <div className="airline-flight-selected-card-details">
                            <div className="airline-flight-card-destination">
                                <p className="padding-right-10">{selectedGoingFlight.departure}</p>
                                <MoveRight />
                                <p className="padding-left-10">{selectedGoingFlight.arrival}</p>
                            </div>
                            <div className="airline-flight-selected-date-and-time">
                                <p>{goingFormattedDate}</p>
                                <p>Horário: {goingTime}</p>
                            </div>
                            <p>R${selectedGoingFlight.price}</p>
                        </div>
                        </>
                    )
                }
                <div className="airline-payment-value-total">
                    <p>Total: R${formattedPriceTotal}</p>
                </div>
                <div className="airline-payment-text">
                    <p>Dados do passageiro:</p>
                </div>
                <div className="airline-payment-personal-data">
                    <div className="airline-payment-data-name">
                        <p>Nome:</p>
                        <p className="airline-user">{user?.name}</p>
                    </div>
                    <div className="airline-payment-data-document">
                        <p>CPF:</p>
                        <p className="airline-user">{user?.document}</p>
                    </div>
                </div>
                {
                    isFlightDuplicated ? (
                        <div className="airline-duplicate-flight">
                            <div className="ariline-message-duplicate-flight">
                                {messageDuplicateFlight}
                            </div>
                            <Link to="/">
                                <div className="airline-button">
                                    <p>Voltar</p>
                                </div>
                            </Link>
                        </div>
                    ) : (
        <               div onClick={handleConfirmationPayment} className="airline-button">
                            <p>Confirmar pagamento</p>
                        </div>
                    )
                }
            </section>
        </main>
    )
}