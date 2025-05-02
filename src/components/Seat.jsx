import { useContext } from "react";
import { SelectedSeatsContext } from "../contexts/SelectedSeatsContext";
import { SelectedTicketsContext } from "../contexts/SelectedTicketsContext";
import { ReservedSeatsContext } from "../contexts/ReservedSeatsContext";
import { SelectedMovieContext } from "../contexts/SelectedMovieContext";
import { SelectedScreeningContext } from "../contexts/SelectedScreeningContext";

export function Seat({value, rowIndex, colIndex}){
    const { selectedSeats, setSelectedSeats } = useContext(SelectedSeatsContext);
    const { reservedSeats } = useContext(ReservedSeatsContext);
    const { selectedTickets } = useContext(SelectedTicketsContext);
    const { selectedMovie } = useContext(SelectedMovieContext);
    const { selectedScreening } = useContext(SelectedScreeningContext);
    function reserveSeat(){
        if(selectedSeats.length < Object.values(selectedTickets[0]).reduce((a,b) => a + b,0)){
            setSelectedSeats([...selectedSeats,
                {
                    row: rowIndex+1,
                    seat: colIndex+1,
                }]
            )
        }
    }
    function unReserveSeat(){
        setSelectedSeats(
            selectedSeats.filter((seat) => seat.row != rowIndex+1 || seat.seat != colIndex+1)
          );
    }

    const isSelected = selectedSeats.some(seat => seat.row-1 == rowIndex && seat.seat-1 == colIndex);
    const isReserved = reservedSeats.some(reservation => reservation.movieId == selectedMovie.id && reservation.screeningId == selectedScreening.id && reservation.seats.some(seat => seat.row-1 == rowIndex && seat.seat-1 == colIndex));
    if(isSelected){
        return (
            <input type="image" 
            src="/assets/images/seatSelected.png"
            className="mx-0.5 cursor-pointer w-6 lg:w-7 xl:w-8"
            onClick={unReserveSeat}
            />
        )
    }
    else if (value == 1 || isReserved) {
        return(
            <input type="image" 
            src="/assets/images/seatBooked.png"
            className="mx-0.5 w-6 lg:w-7 xl:w-8"
            />
        )
    } else {
            return(
                <input type="image" 
                    src="/assets/images/seat.png"
                    className="mx-0.5 cursor-pointer w-6 lg:w-7 xl:w-8"
                    onClick={reserveSeat}
                    />
                )
        }
}