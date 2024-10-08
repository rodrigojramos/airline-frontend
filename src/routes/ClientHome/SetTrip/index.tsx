import { CalendarDays, PlaneLanding, PlaneTakeoff } from "lucide-react";
import Select from 'react-select';
import { selectStyles } from "../../../utils/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type OptionType = {
    value: string;
    label: string;
};

export function SetTrip() {

    const navigate = useNavigate();
    
    const [origin, setOrigin] = useState<OptionType | null>(null);
    
    const [destination, setDestination] = useState<OptionType | null>(null);
    
    const [goingDate, setGoingDate] = useState('');

    const [backDate, setBackDate] = useState('');

    const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');

    const options = [
        { value: 'São Paulo', label: 'São Paulo' },
        { value: 'Uberlândia', label: 'Uberlândia' },
        { value: 'Salvador', label: 'Salvador' },
        { value: 'Porto Alegre', label: 'Porto Alegre' },
        { value: 'Recife', label: 'Recife' },
      ]
    
    function handleChangeSelectOrigin(selectedOption: OptionType | null) {
        setOrigin(selectedOption);
    }

    function handleChangeSelectDestination(selectedOption: OptionType | null) {
        setDestination(selectedOption);
    }

    function handleTripTypeChange(type: 'one-way' | 'round-trip') {
        setTripType(type);
    }

    function handleSearchFlights() {

        if(origin?.value && destination?.value) {
            if(goingDate !== null && backDate == null) {
                navigate("/flights", {
                    state: {
                        origin: origin.value,
                        destination: destination.value,
                        goingDate,
                        tripType
                    }
                })
            } else {
                navigate("/flights", {
                    state: {
                        origin: origin.value,
                        destination: destination.value,
                        goingDate,
                        backDate,
                        tripType
                    }
                })
            }
        }
    }

    return(
        <main className="airline-main">
            <div className="airline-card-reservation">
                <p>Qual será o seu destino? Reserve sua passagem!</p>
                <div>
                    <div>
                    <label className="airline-one-way-select">
                        <input 
                            type="radio" 
                            name="trip-type"
                            value="one-way" 
                            checked={tripType === 'one-way'}
                            onChange={() => handleTripTypeChange('one-way')}
                        />
                        <p>Só ida</p>
                    </label>
                    </div>
                    <div>
                    <label className="airline-round-trip-select">
                        <input 
                            type="radio" 
                            name="trip-type" 
                            value="round-trip" 
                            checked={tripType === 'round-trip'}
                            onChange={() => handleTripTypeChange('round-trip')}
                        />
                        <p>Ida e volta</p>
                    </label>
                    </div>
                </div>
                <div className="airline-destination-select">
                    <div className="airline-select-destination-trip">
                        <p>Origem:</p>
                        <PlaneTakeoff className="airline-icon-destination"/>
                        <Select 
                            className="airline-select" 
                            options={options}
                            styles={selectStyles}
                            placeholder=""
                            onChange={handleChangeSelectOrigin}
                        />
                        <div className="airline-destination-select-space">
                            <p>Destino:</p>
                            <PlaneLanding className="airline-icon-destination"/>
                            <Select 
                                className="airline-select" 
                                options={options}
                                styles={selectStyles}
                                placeholder=""
                                onChange={handleChangeSelectDestination}
                            />
                        </div>
                    </div>
                    <div className="airline-select-data-trip">
                        {
                            tripType == 'one-way' ? (
                                <>
                                    <p>Data:</p>
                                    <CalendarDays className="airline-icon-destination-calendar1"/>
                                    <input 
                                        type="date" 
                                        value={goingDate} onChange={(e) => setGoingDate(e.target.value)}
                                    />
                                </>
                            ) : (
                                <>
                                    <p>Data:</p>
                                    <CalendarDays className="airline-icon-destination-calendar1"/>
                                    <input 
                                        type="date" 
                                        value={goingDate} onChange={(e) => setGoingDate(e.target.value)} 
                                    />
                                    <CalendarDays className="airline-icon-destination-calendar2"/>
                                    <input 
                                        type="date" 
                                        value={backDate} onChange={(e) => setBackDate(e.target.value)} 
                                    />
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
            <div onClick={handleSearchFlights} className="airline-button">
                <p>Procurar passagem</p>
            </div>
        </main>
    )
}