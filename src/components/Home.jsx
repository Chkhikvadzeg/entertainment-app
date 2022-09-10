import Aside from "./Aside";
import SearchInput from "./SearchInput";
import Trending from './Trending';
import RegularMovies from "./RegularMovies";

const Home = () => {
    return (
        <div>
            <Aside path="Home" />
            <div className="mt-20 pb-[60px] sm:ml-[148px] sm:mt-8">
                <SearchInput placeholder="Search for movies or TV series" />
                <Trending title='Trending' />
                <RegularMovies title='Recommended for you' />
            </div>
        </div>
    )
}

export default Home;