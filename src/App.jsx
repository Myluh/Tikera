import { useState } from 'react';
import { MainLayout } from './layouts/MainLayout'
import { SelectedDayContext } from './contexts/SelectedDayContext';
import { SelectedMovieContext } from './contexts/SelectedMovieContext';
import { SelectedScreeningContext } from './contexts/SelectedScreeningContext';
import { SelectedTicketsContext } from './contexts/SelectedTicketsContext';
import { SelectedSeatsContext } from './contexts/SelectedSeatsContext';
import { ReservedSeatsContext } from './contexts/ReservedSeatsContext';
import { MainPage } from './pages/MainPage';

function App() {
  const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const date = new Date();
  const today = weekdays[date.getDay() == 0 ? 6 : date.getDay()-1];
  const [selectedDay, setSelectedDay] = useState(today);
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedScreening, setSelectedScreening] = useState();
    const [ selectedTickets, setSelectedTickets ] = useState([{
        Student: 0,
        Adult: 0,
        Pensioner: 0,
    }]);
    const [ selectedSeats, setSelectedSeats] = useState([]);
    const [ reservedSeats, setReservedSeats] = useState([]);
  return (
    <>
      <SelectedDayContext.Provider
        value={{
          selectedDay,
          setSelectedDay,
        }}
      >
      <SelectedMovieContext.Provider
        value={{
          selectedMovie,
          setSelectedMovie,
        }}
      >
      <SelectedScreeningContext.Provider
        value={{
          selectedScreening,
          setSelectedScreening,
        }}
      >
      <SelectedTicketsContext.Provider
        value={{
          selectedTickets,
          setSelectedTickets,
        }}
      >
      <SelectedSeatsContext.Provider
        value={{
          selectedSeats,
          setSelectedSeats,
        }}
      >
      <ReservedSeatsContext.Provider
        value={{
          reservedSeats,
          setReservedSeats,
        }}
      >
      <MainLayout weekdays={weekdays}>
        <MainPage/>
      </MainLayout>
      </ReservedSeatsContext.Provider>
      </SelectedSeatsContext.Provider>
      </SelectedTicketsContext.Provider>
      </SelectedScreeningContext.Provider>
      </SelectedMovieContext.Provider>
      </SelectedDayContext.Provider>
    </>
  )
}

export default App
