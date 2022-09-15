import HomeImg from './NavImgs/HomeImg'
import MoviesImg from './NavImgs/MoviesImg'
import SeriesImg from './NavImgs/SeriesImg'
import BookmarkImg from './NavImgs/BookmarkImg'

const Aside = (props) => {
    let path = props.path;
    return (
        <aside className='flex w-screen items-center fixed justify-between p-6 bg-semiDarkBlue z-10 sm:rounded-[20px] sm:max-w-fit sm:h-["calc(100vh-64px)"] left-0 top-0 sm:top-8 sm:left-8 sm:bottom-8 sm:p-8 sm:flex-col'>
            <img className='w-6 h-5 sm:w-auto sm:h-auto' src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt="logo" />
            <ul className='flex gap-6 list-none sm:gap-10 sm:flex-col sm:mb-auto sm:mt-20'>
                {path === 'Home' ? <HomeImg path='/home' fill='#FFFFFF' className="hover:fill-mainRed" /> : <HomeImg path='/' fill='#5A698F' className="hover:fill-mainRed" />}
                {path === 'Movies' ? <MoviesImg path='/movies' fill='#FFFFFF' className="hover:fill-mainRed" /> : <MoviesImg path='/movies' fill='#5A698F' className="hover:fill-mainRed" />}
                {path === 'Series' ? <SeriesImg path='/series' fill='#FFFFFF' className="hover:fill-mainRed" /> : <SeriesImg path='/series' fill='#5A698F' className="hover:fill-mainRed" />}
                {path === 'Bookmark' ? <BookmarkImg path='/bookmark' fill='#FFFFFF' className="hover:fill-mainRed" /> : <BookmarkImg path='/bookmark' fill='#5A698F' className="hover:fill-mainRed" />}
            </ul>
            <img className='w-6 h-6 rounded-full border border-white sm:w-10 sm:h-10' src={process.env.PUBLIC_URL + '/assets/image-avatar.png'} alt="Avatar" />
        </aside>
    )
}

export default Aside;