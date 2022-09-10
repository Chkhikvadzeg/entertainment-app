import Input from "./Input";

const SearchInput = ({ value, onChange, placeholder }) => {
    return (
        <div className="flex items-center justify-start w-full gap-6 sm:items-start">
            <img src={process.env.PUBLIC_URL + '/assets/icon-search.svg'} alt="Search" />
            <Input
                type='search'
                defaultValue={value}
                onChange={onChange}
                placeholder={placeholder}
                className='p-0 w-full  border-transparent sm:items-start sm:border-b sm:pb-4 sm:focus:border-grayishBlue'
            />
        </div>
    );
}

export default SearchInput;