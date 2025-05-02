import { useContext } from "react";
import { SelectedMovieContext } from "../contexts/SelectedMovieContext";
import { SelectedScreeningContext } from "../contexts/SelectedScreeningContext";
import { SelectedTicketsContext } from "../contexts/SelectedTicketsContext";
import { SelectedSeatsContext } from "../contexts/SelectedSeatsContext";

export function MovieListCard({movie}) {
  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);
  const { setSelectedScreening } = useContext(SelectedScreeningContext);
  const { selectedTickets, setSelectedTickets } = useContext(SelectedTicketsContext);
  const { setSelectedSeats } = useContext(SelectedSeatsContext);
  function handleClick(movie){
    setSelectedMovie(movie);
    setSelectedScreening();
    setSelectedSeats([]);
    Object.keys(selectedTickets[0]).forEach(key => {
      selectedTickets[0][key] = 0;
    });
    setSelectedTickets(selectedTickets);

  }
  return(
    <div className={"p-3 w-56 h-86 relative bg-gray-950 text-gray-500 shadow-lg rounded-xl flex flex-col items-start border-1 transition duration-300 ease-in-out cursor-pointer " + 
      ((selectedMovie != null && movie.id == selectedMovie.id) ? "hover:bg-gray-900 border-lime-400" : "border-gray-950 hover:bg-gray-900")}
      onClick={() => {handleClick(movie)}}
      >
          <div className="self-center">
            <a href="#movie">
              <img 
              className="rounded-lg h-70 w-50 object-cover"
              src= {"/assets/images/" + movie.image}
              alt={movie.title + " posztere"} />
            </a>
          </div>
          <div>
              <span className="text-white font-bold text-xs">{movie.title}</span>
          </div>
          <div className="text-xs">
              <span className="mr-2">{movie.genre}</span>
              <span>{movie.duration} minutes</span>
          </div>
      </div>
  )
}
