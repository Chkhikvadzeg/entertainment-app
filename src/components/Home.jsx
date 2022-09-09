import Aside from "./Aside";
import SearchInput from "./SearchInput";
import Trending from './Trending';


const Home = () => {
    return (
        <div>
            <Aside path="Home" />
            <div className="mt-20 sm:ml-[148px] sm:mt-8">
                <SearchInput placeholder="Search for movies or TV series" />
                <Trending title='Trending' />
            </div>
        </div>
    )
}

export default Home;