import Regular from "./Regular";
import data from '../data.json';
let movies = [...data]

const RegularMovies = (props) => {
    let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(props.condition.toLowerCase()));
    return (
        <div className="mt-6 flex flex-col gap-6 sm:mt-10 ">
            <h2 className="text-[32px] ">
                {props.condition.length > 0 ? `Found ${filteredMovies.length} results for ${props.condition}` : props.title}
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-7">
                {props.data.map((movie, index) => {
                    if (movie.title.toLowerCase().includes(props.condition.toLowerCase())) {
                        return <Regular key={index} movie={movie} />
                    }
                    return null;
                })
                }
            </div>
        </div>
    )
}

export default RegularMovies;

