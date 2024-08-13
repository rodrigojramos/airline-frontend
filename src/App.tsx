import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClientHome } from './routes/ClientHome'
import { SetTrip } from './routes/ClientHome/SetTrip'
import { Flights } from './routes/ClientHome/Flights'


export function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<SetTrip />} />
          <Route path="flights" element={<Flights />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
