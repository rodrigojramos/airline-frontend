import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClientHome } from './routes/ClientHome'
import { SetTrip } from './routes/ClientHome/SetTrip'
import { Flights } from './routes/ClientHome/Flights'
import { Payment } from './routes/ClientHome/Payment'
import { BuyConfirmation } from './routes/ClientHome/BuyConfirmation'
import { ClientArea } from './routes/ClientHome/ClientArea'


export function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<SetTrip />} />
          <Route path="flights" element={<Flights />} />
          <Route path="payment" element={<Payment />} />
          <Route path="buy-confirmation" element={<BuyConfirmation />} />
          <Route path="client-area" element={<ClientArea />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
