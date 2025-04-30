import { useContext } from "react";
import { SelectedTicketsContext } from "../contexts/SelectedTicketsContext";
import { SelectedSeatsContext } from "../contexts/SelectedSeatsContext";

export function TicketType({ticket, tickets}){
    const { selectedTickets, setSelectedTickets } = useContext(SelectedTicketsContext);
    const { selectedSeats} = useContext(SelectedSeatsContext);
    
    function addSelectedTicket(){
        const tempTickets = {...selectedTickets[0]};
        tempTickets[ticket]++;
        setSelectedTickets([tempTickets]);
    }
    function removeSelectedTicket(){
        if(selectedSeats.length < Object.values(selectedTickets[0]).reduce((a,b) => a + b,0)){
            if(selectedTickets[0][ticket] > 0){
                const tempTickets = {...selectedTickets[0]};
                tempTickets[ticket]--;
                setSelectedTickets([tempTickets]);
            }
        }
    }
    return(
        <div className="flex flex-row justify-between px-4">
            <div className="flex flex-col m-2">
                <span className="text-white font-semibold">{ticket}</span>
                <span className="text-xs">{tickets[0][ticket]} Ft</span>    
            </div>
            <div className="flex flex-row items-center">
                <button className="cursor-pointer bg-white text-black rounded-sm font-bold px-2" onClick={removeSelectedTicket}>-</button>
                <div className="mx-2 border-1 border-lime-400 rounded-sm px-2 text-white">{selectedTickets[0][ticket]}</div>
                <button className="cursor-pointer bg-white text-black rounded-sm font-bold px-1.5"  onClick={addSelectedTicket}>+</button>
            </div>
        </div>
    )
}