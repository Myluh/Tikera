import { useContext } from "react";
import movies from "../assets/movies.json";
import { MovieListCard } from "./MovieListCard";
import { SelectedDayContext } from "../contexts/SelectedDayContext";

export function MovieList() {
    const { selectedDay } = useContext(SelectedDayContext);
    return (
    <>
        <div className="flex gap-4 flex-wrap justify-center xl:justify-start w-full xl:w-1/2 mb-5">
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
  