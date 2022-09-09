const Input = (props) => {
    return (
        <input type={props.type} placeholder={props.placeholder} className={'bg-transparent outline-none opacity-100 text-white caret-mainRed   placeholder:opacity-50 ' + props.className}></input>
    )
}

export default Input;