import Aside from "./Aside";
import SearchInput from "./SearchInput";
import Trending from './Trending';
import RegularMovies from "./RegularMovies";
import data from '../data.json';
import { useState } from "react";

const filteredTrendingSeries = data.filter(movie => movie.isTrending && movie.category === "TV Series");
const filteredSeries = data.filter(movie => movie.category === "TV Series");

const Series = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }


    return (
        <div>
            <Aside path="Series" />
            <div className="mt-20 pb-[60px] sm:ml-[148px] sm:mt-8">
                <SearchInput value={searchValue} onChange={handleChange} placeholder="Search for movies or TV series" />
                {
                    searchValue.length > 0 ?
                        <RegularMovies data={filteredSeries} category="Movie" condition={searchValue} title='Trending' /> :
                        (<>
                            <Trending data={filteredTrendingSeries} title='Trending' />
                            <RegularMovies data={filteredSeries} condition={searchValue.trim()} title='TV Series' />
                        </>)
                }
            </div>
        </div>
    )
}

export default Series;