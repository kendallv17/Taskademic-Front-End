import React from "react";
import success from "../../images/success.jpg"
import Input from "../../components/input/Input";
import { writeSession } from '../../utils/SessionManager';
import { useNavigate } from "react-router-dom";
export default function SignUp({supabaseClient}){
    const navigate = useNavigate();
    const handleSignUpSubmit = async (event) => {
        try {
            event.preventDefault()
            let iqualPasswords = event.target.password.value === event.target.repeat_password.value;
            if(iqualPasswords){
                const { data, error } = await supabaseClient.auth.signUp(
                    {
                      email: event.target.email.value,
                      password: event.target.password.value,
                      options: {
                        data: {
                          first_name: event.target.name.value,
                          lastname: event.target.lastname.value,
                          college: event.target.college.value
                        }
                      }
                    }
                )
                if(error) throw new Error(`An error ocurred while creating your account, ${error}, please retry again`)
                writeSession(data)
                navigate("/", { replace: true })
            } else {
                throw new Error("Passwords do not match");
            }
            
        }
        catch(error){
            alert(error)
        }
    }
    return (
        <div className="sm:flex min-h-screen md:flex bg-blue-dark">
            <div className="self-center flex-1 p-3">
                <img src={success} alt="Welcome to taskademic" className="w-full"/>
            </div>
            <div className="self-center flex-1 p-3">
            <h2 className="text-3xl text-center text-radical-red-500 mb-5">Create a new account</h2>
                <form onSubmit={ handleSignUpSubmit }>
                    <div className="flex mb-3">
                        <div className="flex-1 pr-3">
                            <Input type="text" identifier="name" tittle="Name" placeholder="" required={true}/>
                        </div>
                        <div className="flex-1">
                            <Input type="text" identifier="lastname" tittle="Lastname" placeholder="" required={true}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Input type="email" identifier="email" tittle="Email address" placeholder="" required={true}/>
                    </div>
                    <div className="mb-3">
                        <Input type="password" identifier="password" tittle="Password" placeholder="" required={true}/>
                    </div>
                    <div className="mb-3">
                        <Input type="password" identifier="repeat_password" tittle="Repeat the password" placeholder="" required={true}/>
                    </div>
                    <div className="mb-3">
                        <Input type="text" identifier="college" tittle="Your college name" placeholder="" required={true}/>
                    </div>
                    <div className="flex items-center content-center mb-3">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <label htmlFor="terms" className="ml-2 text-sm font-medium text-mercury-600 dark:text-gray-300">I agree with the <a href="/terms-and-conditions" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                    </div>
                    <div className="flex">
                        <a type="button" href="/login" className="flex-1 mr-2 text-mercury-600 bg-radical-red-800 hover:bg-radical-red-600 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</a>
                        <button type="submit" className="flex-1 text-mercury-600 bg-bright-turquoise-700 hover:bg-bright-turquoise-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}