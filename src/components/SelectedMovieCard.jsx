import { useContext } from "react";
import { SelectedDayContext } from "../contexts/SelectedDayContext";
import { SelectedMovieContext } from "../contexts/SelectedMovieContext";
import { ScreeningButton } from "./ScreeningButton";
import { SeatSelector } from "./SeatSelector";
import { ReservationCard } from "./ReservationCard";
import { ReservedSeatsContext } from "../contexts/ReservedSeatsContext";

export function SelectedMovieCard() {
    const { selectedMovie } = useContext(SelectedMovieContext);
    const { selectedDay } = useContext(SelectedDayContext);
    const { reservedSeats } = useContext(ReservedSeatsContext);
    const tickets = [{
        Student: 2000,
        Adult: 2500,
        Pensioner: 1800,
    }]
    if(selectedMovie != null){
        return (
        <>
        <div id="movie" className="w-full xl:w-1/2 text-gray-400 border-1 border-gray-400/30 rounded-2xl p-3 xl:p-0">
            <div className="xl:h-70">
             <div className="self-center">
                  <img 
                  className="xl:float-left rounded-3xl h-70 w-50 object-cover mr-8 border-gray-800 border-5 shadow-xl rotate-355"
                  src= {"/assets/images/" + selectedMovie.image}
                  alt={selectedMovie.title + " posztere"} />
              </div>
              <div className="text-white font-semibold xl:text-3xl text-2xl pt-3">
                  <span>{selectedMovie.title}</span>
              </div>
              <div>
                  <span className="font-medium">{selectedMovie.release_year}, {selectedMovie.genre}, {selectedMovie.duration} minutes</span>
              </div>
              <div className="text-sm mb-3 w-1/2 xl:w-full">
                  <span>{selectedMovie.description}</span>
              </div>
              <div className="flex flex-wrap gap-3 text-sm xl:mb-40">
                {selectedMovie.screenings.filter(screening => screening.weekday == selectedDay)
                .sort((a,b) => a.start_time.localeCompare(b.start_time))
                .map(screening => {
                    const allSeats = screening.room.rows * screening.room.seatsPerRow;
                    const alreadyReservedSeats = screening.bookings.length;
                    const userReservedSeats = reservedSeats.filter(reservation => reservation.movieId == selectedMovie.id && reservation.screeningId == screening.id)
                    .reduce((sum, reservation) => sum + reservation.seats.length,0);
                    return (<ScreeningButton isActive={allSeats > alreadyReservedSeats + userReservedSeats} screening={screening} key={screening.id}/>)
                    })
                }
              </div>
            </div>
              <SeatSelector tickets={tickets}/>
              <ReservationCard tickets={tickets}></ReservationCard>
        </div>
        </>
        );
    }
  }
  