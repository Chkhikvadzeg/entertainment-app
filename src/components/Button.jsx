const Button = (props) => {
    return (
        <button className="w-full bg-mainRed text-white py-4 rounded-md text-[15px] leading-tight hover:bg-white hover:text-darkBlue">{props.value}</button>
    )
}

export default Button