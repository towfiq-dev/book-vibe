import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    // This hook gets the actual error (if any) from React Router
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <section className="bg-white dark:bg-gray-900 ">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-sm font-medium text-red-500 dark:text-red-400">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        {/* We use a friendly title */}
                        Page not found
                    </h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Sorry, the page you are looking for doesn't exist. Here are some helpful links:
                    </p>
                    {/* Displaying actual error details (optional, but good for debugging) */}
                    <p className="mt-2 text-sm text-gray-400 italic">
                        Error Details: {error?.statusText || error?.message || "Unknown Route"}
                    </p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <button 
                            onClick={() => navigate(-1)} // Go back to the previous page
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>Go back</span>
                        </button>

                        <Link 
                            to="/" // Link to your home page
                            className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-lg shrink-0 sm:w-auto hover:bg-red-600 dark:hover:bg-red-500 dark:bg-red-600">
                            Take me home
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    {/*--- Replace this URL with your actual SVG/Image file path ---*/}
                    <img 
                        className="w-full max-w-lg lg:mx-auto" 
                        src="https://merakiui.com/images/components/illustration.svg" 
                        alt="Page not found illustration" 
                    />
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;