import { useContext } from "react";
import { SelectedScreeningContext } from "../contexts/SelectedScreeningContext";
import { SelectedTicketsContext } from "../contexts/SelectedTicketsContext";
import { SelectedSeatsContext } from "../contexts/SelectedSeatsContext";

export function ScreeningButton({isActive,screening}) {
    const { selectedScreening, setSelectedScreening } = useContext(SelectedScreeningContext);
    const { selectedTickets, setSelectedTickets } = useContext(SelectedTicketsContext);
    const { setSelectedSeats } = useContext(SelectedSeatsContext);
    function handleSelectedScreening(screening){
        setSelectedScreening(screening);
        setSelectedSeats([]);
        Object.keys(selectedTickets[0]).forEach(key => {
          selectedTickets[0][key] = 0;
        });
        setSelectedTickets(selectedTickets);
      }
    if(isActive){
      return(
          <div className={"cursor-pointer border-2 transition duration-300 ease-in-out rounded-md pl-1 pr-1 pb-0.5 " + 
              ((selectedScreening != null && selectedScreening.id == screening.id) ? "border-lime-400 bg-lime-400 text-black" : "border-white/80 text-white/80")} onClick={() => {handleSelectedScreening(screening)}}>
                  {screening.start_time}
          </div>
      )
    }
    else{
      return(
          <div className={"cursor-default border-2 transition duration-300 ease-in-out rounded-md pl-1 pr-1 pb-0.5 border-white-800/30 text-white/30"}>
                  {screening.start_time}
          </div>
      )
    }
  }
  