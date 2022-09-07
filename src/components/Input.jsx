const Input = (props) => {
    return (
        <input type={props.type} placeholder={props.placeholder} className="bg-transparent outline-none opacity-100 text-white caret-mainRed px-4 pb-[18px] border-b border-grayishBlue focus:border-white placeholder:opacity-50"></input>
    )
}

export default Input;