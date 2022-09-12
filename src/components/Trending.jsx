import TrendingMovie from "./TrendingMovie";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

const Trending = (props) => {

    return (
        <div className="mt-8 flex flex-col gap-6">
            <h2 className="text-[32px] ">{props.title}</h2>
            <Splide
                options={{
                    fixedWidth: 470,
                    autoplay: true,
                    perMove: 1,
                    interval: 5000,
                    cover: true,
                    arrows: false,
                    direction: 'ltr',
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    start: 2,
                    gap: 40,
                    breakpoints: {
                        768: {
                            fixedWidth: 240,
                            gap: 16
                        }
                    }

                }}
                aria-label="Trending Movies"
            >
                {props.data.filter(movie => movie.isTrending).map((movie, index) =>
                    <SplideSlide key={index}>
                        <TrendingMovie movie={movie} />
                    </SplideSlide>
                )}
            </Splide>
        </div >
    )
}

export default Trending;