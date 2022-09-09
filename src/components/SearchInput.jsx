import Input from "./Input";
import searchImg from '../assets/icon-search.svg'

const SearchInput = ({ value, onChange, placeholder }) => {
    return (
        <div className="flex items-center justify-start w-full gap-6 sm:items-start">
            <img src={searchImg} alt="Search" />
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