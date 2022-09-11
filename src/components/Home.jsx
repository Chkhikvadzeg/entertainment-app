import Aside from "./Aside";
import SearchInput from "./SearchInput";
import Trending from './Trending';
import RegularMovies from "./RegularMovies";
import { useState } from "react";
import data from '../data.json';

const Home = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }


    return (
        <div>
            <Aside path="Home" />
            <div className="mt-20 pb-[60px] sm:ml-[148px] sm:mt-8">
                <SearchInput value={searchValue} onChange={handleChange} placeholder="Search for movies or TV series" />
                {
                    searchValue.length > 0 ?
                        <RegularMovies data={data} condition={searchValue} title='Trending' /> :
                        (<>
                            <Trending data={data} title='Trending' />
                            <RegularMovies data={data} condition={searchValue} title='Recommended for you' />
                        </>)
                }
            </div>
        </div>
    )
}

export default Home;