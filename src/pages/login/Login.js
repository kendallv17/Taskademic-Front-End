import React from "react";
import Input from "../../components/input/Input";
import welcome from "../../images/welcome.jpg"
export default function Login(){
    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <h1 className="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white">Taskademic board</h1>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-blue-dark">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <img src={welcome} alt="Welcome"/>
                        <h2 className="text-xl font-bold leading-tight tracking-tight md:text-xl text-radical-red-500"> Your first task is to sign in to your account </h2>
                        <form className="space-y-4 md:space-y-6" action="/login" method="POST">
                            <div>
                                <Input type="email" identifier="email" tittle="Email address" required={ true }/>
                            </div>
                            <div>
                                <Input type="password" identifier="password" tittle="Password" required={ true }/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label  htmlFor="remember" className="text-mercury-600 text-base">Remember me</label>
                                    </div>
                                </div>
                                <a href="/password-forgotten" className="text-sm font-medium hover:underline text-radical-red-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-mercury-50 bg-radical-red-500 hover:bg-radical-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <a type="button" href="/" className="w-full text-mercury-50 bg-bright-turquoise-700 hover:bg-bright-turquoise-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Cancel</a>
                            <p className="text-sm font-light text-mercury-600 dark:text-gray-400">
                                Don’t have an account yet? <a href="/signup" className="font-medium hover:underline text-mercury-600">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}