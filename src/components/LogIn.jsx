import Input from "./Input";
import logo from '../assets/logo.svg'
import Button from "./Button";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="mx-auto max-w-[400px] py-20 flex flex-col items-center text-white">
            <img src={logo} alt='logo' />
            <div className="mt-14 p-6 flex w-full flex-col gap-10 rounded-[20px] bg-semiDarkBlue md:p-8 md:mt-10">
                <h1 className="text-white text-[32px] leading-tight">Login</h1>
                <div className="flex flex-col gap-6">
                    <Input type='email' placeholder='Email address' />
                    <Input type='password' placeholder='Password' />
                </div>
                <div className="flex flex-col gap-6">
                    <Button>Login to your account</Button>
                    <p className="text-center hyphens-manual">
                        Don’t have an account? &shy;
                        <Link to={'/sign-up'} className='text-mainRed whitespace-nowrap'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LogIn;