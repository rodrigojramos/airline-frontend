import { Navigate, Route, Routes } from 'react-router-dom'
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
import { PassengerList } from './routes/Admin/PassengerList'
import { Login } from './routes/ClientHome/Login'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { history } from "./utils/history"
import { PrivateRoute } from './components/PrivateRoute'


export function App() {
  return(
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<SetTrip />} />
          <Route path="flights" element={<Flights />} />
          <Route path="payment" element={<Payment />} />
          <Route path="buy-confirmation" element={<BuyConfirmation />} />
          <Route path="client-area" element={<ClientArea />} />
          <Route path="check-in" element={<CheckIn />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/admin" element={<PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute>}>
          <Route index element={<AdminArea />} />
          <Route path="flights" element={<AllFlights />} />
          <Route path="planes" element={<Planes />} />
          <Route path="passenger-list" element={<PassengerList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HistoryRouter>
  )
}
