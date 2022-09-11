const SearchInput = (props) => {




    return (
        <div className="flex items-center justify-start w-full gap-6 sm:items-start">
            <img src={process.env.PUBLIC_URL + '/assets/icon-search.svg'} alt="Search" />
            <input
                type='search'
                id='search'
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                className='bg-transparent outline-none opacity-100 text-white caret-mainRed placeholder:opacity-50 p-0 w-full border-transparent sm:items-start sm:border-b sm:pb-4 sm:focus:border-grayishBlue'
            />
        </div>
    );
}

export default SearchInput;