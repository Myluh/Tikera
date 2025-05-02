import { useContext } from "react";
import { SelectedMovieContext } from "../contexts/SelectedMovieContext";
import { SelectedDayContext } from "../contexts/SelectedDayContext";
import { SelectedTicketsContext } from "../contexts/SelectedTicketsContext";
import { SelectedSeatsContext } from "../contexts/SelectedSeatsContext";
import { SelectedScreeningContext } from "../contexts/SelectedScreeningContext";
import { ReservedSeatsContext } from "../contexts/ReservedSeatsContext";

export function ReservationCard({tickets}){
    const { selectedMovie } = useContext(SelectedMovieContext);
    const { selectedDay } = useContext(SelectedDayContext);
    const { selectedTickets, setSelectedTickets } = useContext(SelectedTicketsContext);
    const { selectedSeats, setSelectedSeats } = useContext(SelectedSeatsContext);
    const { selectedScreening, setSelectedScreening } = useContext(SelectedScreeningContext);
    const { reservedSeats, setReservedSeats } = useContext(ReservedSeatsContext);
    let ticketNumber = 0;
    Object.keys(selectedTickets[0]).forEach(key => {
        ticketNumber += selectedTickets[0][key];
    });
    function ReserveSeats(){
        setReservedSeats([...reservedSeats,{
            movieId: selectedMovie.id,
            screeningId: selectedScreening.id,
            seats: selectedSeats,
        }]
        );
        setSelectedSeats([]);
        Object.keys(selectedTickets[0]).forEach(key => {
        selectedTickets[0][key] = 0;
        });
        setSelectedTickets(selectedTickets);
        const allSeats = selectedScreening.room.rows * selectedScreening.room.seatsPerRow;
        const alreadyReservedSeats = selectedScreening.bookings.length;
        const userReservedSeats = reservedSeats.filter(reservation => reservation.movieId == selectedMovie.id && reservation.screeningId == selectedScreening.id)
        .reduce((sum, reservation) => sum + reservation.seats.length,0) + selectedSeats.length;
        if(allSeats == alreadyReservedSeats + userReservedSeats){
            setSelectedScreening();
        }
    }
    let sum = 0;
    Object.keys(selectedTickets[0]).forEach(key => {
        sum += selectedTickets[0][key] * tickets[0][key];
    });
    if(ticketNumber > 0 && selectedSeats.length == ticketNumber){
        return(
            <div className="flex flex-col items-center border-1 border-gray-400/30 rounded-2xl p-7 m-4
                            sm:flex-row ">
                <div className="w-1/2">
                    <div className="text-white text-lg font-semibold">{selectedMovie.title}</div>
                    <div className="mb-3">{selectedDay} - {selectedScreening.start_time}</div>
                    {Object.keys(selectedTickets[0]).map((key, index) => {
                        if(selectedTickets[0][key] > 0){
                            return( 
                                <div key={index} className="flex flex-row justify-between text-sm">
                                    <div className="flex">
                                        <div>{selectedTickets[0][key]}x {key}</div>
                                    </div>
                                    <div className="flex">
                                        <div>{selectedTickets[0][key]*tickets[0][key]} Ft</div>
                                    </div>
                                </div>
                            ) 
                        }
                    })}
                    <div className="flex flex-col items-center">
                        <hr className="my-3 w-full text-gray-400/30"/>
                    </div>
                    <div className="flex justify-between text-white pb-4">
                        <div className="text-md">
                            Total:
                        </div>
                        <div className="text-md">
                            {sum} ft
                        </div>
                    </div>
                    <div className="text-sm">Seatings</div>
                    <span className="text-sm">
                    {selectedSeats.map((seat,index) => {
                        return ( <span key={index}>row: {seat.row} <span className="font-bold">seat: {seat.seat}{index == selectedSeats.length-1 ? "" : ","} </span></span>)
                    })}
                    </span>
                    <div className="flex flex-col items-center">
                        <hr className="my-3 w-full text-gray-400/30"/>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 justify-center items-end lg:mr-20 pl-3">
                    <button className="cursor-pointer bg-lime-400 text-black transition duration-300 ease-in-out rounded-2xl px-3 py-2 font-semibold"
                    onClick={ReserveSeats}>
                        Finalize reservation
                    </button>
                </div>
            </div>
        )
    }
}