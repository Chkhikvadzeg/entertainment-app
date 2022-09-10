import { useState } from 'react';


const TrendingMovie = (props) => {
    const [isBookmarked, setBookmark] = useState(props.movie.isBookmarked);

    const trueState = () => {
        setBookmark(true);
    }

    const falseState = () => {
        setBookmark(false);
    }

    return (

        <div className="h-full w-auto shrink-0 rounded-lg overflow-hidden relative">
            <img className='w-full h-full'
                src={process.env.PUBLIC_URL + props.movie.thumbnail.trending.large}
                alt={props.movie.title} />
            <div className='absolute cursor-pointer top-2 right-2 w-8 h-8 flex justify-center items-center rounded-full bg-darkBlue bg-opacity-50 sm:top-4 sm:right-6' onMouseEnter={trueState} onMouseLeave={falseState}>
                <img src={isBookmarked ? process.env.PUBLIC_URL + '/assets/icon-bookmark-full.svg' : process.env.PUBLIC_URL + '/assets/icon-bookmark-empty.svg'} alt={isBookmarked ? 'Bookmarked Icon' : 'Not Bookmarked Icon'} />
            </div>
            <div className='absolute bottom-0 p-4 w-full flex flex-col gap-1 h-[70px] sm:h-[100px]'>
                <div className='flex items-center gap-2 text-xs opacity-75 sm:text-[15px]'>
                    <span>{props.movie.year}</span>
                    <img src={process.env.PUBLIC_URL + "/assets/Oval.svg"} alt="oval" />
                    <div className='flex items-center gap-[6px]'>
                        <img src='/assets/icon-category-movie.svg' alt="" />
                        <span>{props.movie.category}</span>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/assets/Oval.svg"} alt="oval" />
                    <span>{props.movie.rating}</span>
                </div>
                <h3 className='font-medium text-[15px] sm:text-2xl'>{props.movie.title}</h3>
            </div>
        </div>
    )
}

export default TrendingMovie;