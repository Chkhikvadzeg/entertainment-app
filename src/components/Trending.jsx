import TrendingMovie from "./TrendingMovie";
import data from '../data.json';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

const Trending = (props) => {

    return (
        <div className="mt-8 flex flex-col gap-6">
            <h2 className="text-[32px] ">{props.title}</h2>
            <Splide
                options={{
                    rewind: true,

                    pagination: false,
                    type: 'loop',
                    fixedWidth: 470,
                    autoHeight: true,
                    autoplay: true,
                    perMove: 1,
                    interval: 3000,
                    arrows: false,
                    direction: 'ltr',
                    drag: true,

                    gap: 40,
                    classes: {
                        SplideSlide: 'flex items-center gap-10'
                    },
                    breakpoints: {
                        768: {
                            fixedWidth: 240,
                            gap: 16
                        }
                    }

                }}
                aria-label="Trending Movies"
            >
                {data.filter(movie => movie.isTrending).map((movie, index) =>
                    <SplideSlide key={index}>
                        <TrendingMovie movie={movie} />
                    </SplideSlide>
                )}
            </Splide>
        </div >
    )
}

export default Trending;