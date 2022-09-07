const Button = (props) => {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className="w-full bg-mainRed text-white py-4 rounded-md text-[15px] leading-tight hover:bg-white hover:text-darkBlue">{props.children}</button>
    )
}

export default Button