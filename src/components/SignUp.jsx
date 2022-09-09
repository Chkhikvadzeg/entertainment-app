import Input from "./Input";
import logo from '../assets/logo.svg'
import Button from "./Button";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="mx-auto max-w-[400px] w-full py-20 flex flex-col items-center text-white">
            <img src={logo} alt='logo' />
            <div className="mt-14 p-6 flex w-full flex-col gap-10 rounded-[20px] bg-semiDarkBlue md:p-8 md:mt-10">
                <h1 className="text-white text-[32px] leading-tight">Sign up</h1>
                <div className="flex flex-col gap-6">
                    <Input className='px-4 pb-[18px] border-b border-grayishBlue focus:border-white' type='email' placeholder='Email address' />
                    <Input className='px-4 pb-[18px] border-b border-grayishBlue focus:border-white' type='password' placeholder='Password' />
                    <Input className='px-4 pb-[18px] border-b border-grayishBlue focus:border-white' type='password' placeholder='Repeat password' />
                </div>
                <div className="flex flex-col gap-6">
                    <Button>Create an account</Button>
                    <p className="text-center hyphens-manual">Already have an account? &shy;
                        <Link to='/' className='text-mainRed whitespace-nowrap'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LogIn;