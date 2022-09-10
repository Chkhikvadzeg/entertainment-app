import Regular from "./Regular";
import data from '../data.json';

const RegularMovies = (props) => {
    return (
        <div className="mt-6 flex flex-col gap-6 sm:mt-10 ">
            <h2 className="text-[32px] ">{props.title}</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-7">
                {data.map((movie, index) => {
                    return <Regular key={index} movie={movie} />
                })
                }
            </div>
        </div>
    )
}

export default RegularMovies;