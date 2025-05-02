import { useContext } from "react";
import { SelectedDayContext } from "../contexts/SelectedDayContext";
import { MovieList } from "../components/MovieList";
import { SelectedMovieCard } from "../components/SelectedMovieCard";

export function MainPage() {
    const { selectedDay } = useContext(SelectedDayContext);
    return (
    <>
      <div className="p-4 items-center justify-center">
        <div className='flex flex-col items-center justify-center 
        bg-lime-500 w-40 p-3 rounded-3xl mb-5
        text-shadow-xs text-shadow-lime-800'>
          <h1 className='text-2xl font-bold'>{selectedDay}</h1>
        </div>
        <div className="xl:flex">
          <MovieList/>
          <SelectedMovieCard/>
        </div>
      </div>
    </>
    );
  }
  