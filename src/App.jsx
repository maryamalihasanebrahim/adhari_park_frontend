import './App.css'
import Nav from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Rides from './components/Rides'
import RideDetails from './components/RideDetails'
import rideArray from './rides'
import Form from './components/Booking'
const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/rides" element={<Rides />}></Route>
          <Route
            path="/rides/:id"
            element={<RideDetails rideArray={rideArray} />}
          />
          <Route path="/bookings/new/:id" element={<Form />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
