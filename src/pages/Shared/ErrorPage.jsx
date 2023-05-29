import React from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom'
import errorPage from '../../assets/404Error.png'

const ErrorPage = () => {
    const { error, status } = useRouteError();
    const navigate = useNavigate()
    return (
        <div className='flex items-center h-screen p-4 lg:p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <img src={errorPage} alt="404" />
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <button
                        onClick={() => navigate(-1)}
                        className='px-8 py-3 font-semibold rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900'
                    >
                        Back to previous
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage