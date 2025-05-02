import { useContext } from "react";
import { SelectedDayContext } from "../contexts/SelectedDayContext";
import { SelectedMovieContext } from "../contexts/SelectedMovieContext";
import { SelectedScreeningContext } from "../contexts/SelectedScreeningContext";

export function MenuButton({ weekday, toggleMenu }) {
    const { selectedDay,setSelectedDay } = useContext(SelectedDayContext);
    const { setSelectedMovie } = useContext(SelectedMovieContext);
    const { setSelectedScreening } = useContext(SelectedScreeningContext);
    
    function handleClick(day){
        setSelectedDay(day);
        setSelectedMovie();
        setSelectedScreening();
        toggleMenu();
    }
    if(selectedDay != weekday){
        return(
            <>
                <button onClick={() => handleClick(weekday)} className={"cursor-pointer bg-slate-200/20 hover:bg-slate-200/30 transition duration-300 ease-in-out border-1 border-white/40 w-30 h-10 text-sm text-gray-50 " + (weekday == "Monday" ? "lg:rounded-l-2xl" : (weekday == "Sunday" ? "lg:rounded-r-2xl" : ""))}>{weekday}</button>
            </>
        )
    }
    else{
        return(
            <>
                <button onClick={() => handleClick(weekday)}s className={"cursor-pointer bg-slate-200/20 hover:bg-slate-200/30 text-lime-500 border-lime-500 transition duration-300 ease-in-out border-1  w-30 h-10 text-sm " + (weekday == "Monday" ? "lg:rounded-l-2xl" : (weekday == "Sunday" ? "lg:rounded-r-2xl" : ""))}>{weekday}</button>
            </>
        )
    }
    
}