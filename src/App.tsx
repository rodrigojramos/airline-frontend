import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClientHome } from './routes/ClientHome'
import { SetTrip } from './routes/ClientHome/SetTrip'
import { Flights } from './routes/ClientHome/Flights'
import { Payment } from './routes/ClientHome/Payment'
import { BuyConfirmation } from './routes/ClientHome/BuyConfirmation'
import { ClientArea } from './routes/ClientHome/ClientArea'
import { CheckIn } from './routes/ClientHome/CheckIn'
import { Admin } from './routes/Admin'
import { AdminArea } from './routes/Admin/AdminArea'
import { AllFlights } from './routes/Admin/AllFlights'
import { Planes } from './routes/Admin/Planes'


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
          <Route path="check-in" element={<CheckIn />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminArea />} />
          <Route path="flights" element={<AllFlights />} />
          <Route path="planes" element={<Planes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
