import { Seat } from "./Seat";

export function SeatList({Seats}){
    return(
        <div>
            {
                Seats.map((row, index) => {
                    const rowIndex = index;
                    return(
                        <div className="flex mb-1.5 items-center justify-center" key={rowIndex}>
                            <span className="text-sm mr-1">{rowIndex+1}</span>
                            {row.map((value,colIndex) => (
                                <Seat value={value} rowIndex={rowIndex} colIndex={colIndex} 
                                key={rowIndex.toString() + colIndex.toString()}/>
                            ))}
                        </div>
                    )
                })
            }
        </div>
    )
}