import { useContext } from "react";
import movies from "../assets/movies.json";
import { MovieListCard } from "./MovieListCard";
import { SelectedDayContext } from "../contexts/SelectedDayContext";

export function MovieList() {
    const { selectedDay } = useContext(SelectedDayContext);
    return (
    <>
        <div className="flex gap-5 flex-wrap justify-center lg:justify-start lg:ml-8 w-full lg:w-1/2">
        {movies.filter(movie => movie.screenings.some(screening => screening.weekday == selectedDay)).map(movie => (
        <MovieListCard
          movie={movie}
          key={movie.id}
        />
      ))}
    </div>
    </>
    );
  }
  