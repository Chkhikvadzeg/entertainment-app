import Aside from "./Aside";
import SearchInput from "./SearchInput";
import Trending from './Trending';
import RegularMovies from "./RegularMovies";
import { useState, useContext } from "react";
import { UserContext } from "../App";



const Movies = () => {

    const { movies } = useContext(UserContext);
    const filteredTrendingMovies = movies.filter(movie => movie.isTrending && movie.category === "Movie");
    const filteredMovies = movies.filter(movie => movie.category === "Movie");

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }


    return (
        <div>
            <Aside path="Movies" />
            <div className="mt-20 pb-[60px] sm:ml-[148px] sm:mt-8">
                <SearchInput value={searchValue} onChange={handleChange} placeholder="Search for movies or TV series" />
                {
                    searchValue.length > 0 ?
                        <RegularMovies data={filteredMovies} category="Movie" condition={searchValue} title='Trending' /> :
                        (<>
                            <Trending data={filteredTrendingMovies} title='Trending' />
                            <RegularMovies data={filteredMovies} condition={searchValue.trim()} title='Movies' />
                        </>)
                }
            </div>
        </div>
    )
}

export default Movies;