import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';

const Login = () => {
    document.title = "Toy KingDom || Login"
    const { signIn, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate()

    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                toast.success("User Successfully Logged")
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                toast.success("User Successfully Logged")
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div className="py-6 lg:py-24">
            <div className="rounded-lg shadow-xl mx-auto max-w-sm lg:max-w-xl">
                <div className="w-full p-8">
                    <form onSubmit={handleSignIn}>
                        <h2 className="text-3xl font-semibold text-cyan-500 text-center">Login</h2>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" required />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <p className="text-xs text-gray-500 cursor-pointer hover:text-gray-900">Forget Password?</p>
                            </div>
                            <input className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" required />
                        </div>
                        <div className="mt-8">
                            <button className="bg-color hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-2 px-4 w-full rounded" type='submit'>Login</button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <p className="text-sm text-center text-gray-500">Don't have an account? <Link to={"/register"} className='underline hover:text-gray-900'>Register</Link></p>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </form>
                    <div className='flex flex-col'>
                        <button onClick={handleGoogleSignIn} className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-lg hover:bg-slate-100">
                            <FaGoogle className='text-black' />
                            <span className="py-3 text-center text-gray-600 font-bold">Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;