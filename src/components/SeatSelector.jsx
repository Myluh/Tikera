import { useContext } from "react";
import { SelectedScreeningContext } from "../contexts/SelectedScreeningContext";
import { TicketType } from "./TicketType";
import { SeatList } from "./SeatList";
import { SummaryCard } from "./SummaryCard";

export function SeatSelector({tickets}){
    const { selectedScreening } = useContext(SelectedScreeningContext);
    if(selectedScreening != null){
        const Seats = new Array(selectedScreening.room.rows);
        for (let i = 0; i < selectedScreening.room.rows; i++) {
            Seats[i] = new Array(selectedScreening.room.seatsPerRow).fill(0);
        }
        selectedScreening.bookings.map(booking => {
            Seats[booking.row-1][booking.seat-1] = 1;
        });
        return (
        <div className="text-gray-400 border-1 border-gray-400/30 rounded-2xl m-5 p-2">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
                <div className="w-full xl:w-2/7 2xl:w-3/7">
                    {Object.keys(tickets[0]).map((ticket, index) => (
                        <TicketType key={index} ticket={ticket} tickets={tickets}/>
                    ))}
                    {/* <div className="flex flex-col items-center">
                        <hr className="w-9/10 text-gray-400/30"/>
                    </div> */}
                    <SummaryCard tickets={tickets}></SummaryCard>
                </div>
                <div className="w-full xl:w-5/7 2xl:w-4/7 flex flex-col items-center xl:items-end p-2">
                    <SeatList Seats={Seats}></SeatList>
                </div>
            </div>
        </div>
        )
    }
}