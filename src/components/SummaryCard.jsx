import { useContext } from "react";
import { SelectedTicketsContext } from "../contexts/SelectedTicketsContext";
import { SelectedSeatsContext } from "../contexts/SelectedSeatsContext";

// export function SummaryCard({tickets}){
export function SummaryCard(){
    const { selectedTickets} = useContext(SelectedTicketsContext);
    const { selectedSeats} = useContext(SelectedSeatsContext);
    if (selectedTickets != null) {
        // let sum = 0;
        // Object.keys(selectedTickets[0]).forEach(key => {
        //     sum += selectedTickets[0][key] * tickets[0][key];
        // });
        let ticketNumber = 0;
        Object.keys(selectedTickets[0]).forEach(key => {
            ticketNumber += selectedTickets[0][key];
        });
        if(ticketNumber != 0){
            return (
                <>
                {/* <div className="flex justify-between text-white">
                    <div className="m-3 text-md">
                        Total:
                    </div>
                    <div className="m-3 text-md">
                        {sum} ft
                    </div>
                </div> */}
                <div className="text-white flex flex-col justify-center items-center border-gray-400/30 rounded-2xl border-1 mx-8 py-2 my-3">
                    <div className="mb-1">
                        Choose your seat!
                    </div>
                    <div>
                        {selectedSeats.length}/{ticketNumber} selected
                    </div>
                </div>
                </>
            )
        }
    }
}