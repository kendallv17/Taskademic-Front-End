import { useState, useEffect } from "react";
import GetWindowSize from "../../utils/GetWindowSize";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { readSession, clearSession } from "../../utils/SessionManager";
import { useNavigate } from "react-router-dom";
import SelectedLicense from "../../components/licence/SelectedLicense";
export default function Profile(){
    const navigate = useNavigate();
    const [hidden, setHidden] = useState(true)
    const [windowSize, setWindowSize] = useState(GetWindowSize());
    const sessionData = readSession();
    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(GetWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    const handleSignOut = () => {
        clearSession();
        navigate("/login", { replace: true });
        
    }
    return (
        <div className="flex h-fit">
            <Sidebar hidden={ hidden }></Sidebar>
            <div className="flex-auto flex-col h-full">
                <Navbar hidden={ hidden } setHidden={ setHidden }/>
                {windowSize.innerWidth < 768 && !hidden ?    
                    <></>:
                    <div className="p-6 space-y-2 md:space-y-6 sm:p-8 border-2 px-4">
                            <div className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 lg:mx-0 pt-10">
                                <h1 className="text-3xl font-bold text-center lg:text-left lg:pt-0">{ sessionData.user.user_metadata.first_name } { sessionData.user.user_metadata.lastname }</h1>
                                <div className="mx-auto lg:mx-0 w-3/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                                <div className="p-4 md:p-6 text-center lg:text-left flex flex-col md:flex-row">
                                     {/* <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
                                                <img src={ profile } alt="Profile icon" className="rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></img>
                                            </div> */}
                                    <div className="flex-0">
                                        <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>{ sessionData.user.email }
                                        </p>
                                        <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" /></svg>{sessionData.user.id}
                                        </p>
                                        <p className="pt-8 text-sm">
                                            Currently enroll at <strong>{ sessionData.user.user_metadata.college }</strong>
                                        </p>
                                        <div className="pt-12 pb-8 text-center lg:text-left lg:w-full">
                                            <button className="bg-radical-red-700 hover:bg-radical-red-400 text-white font-bold py-2 px-4 rounded-full" onClick={ handleSignOut }>
                                                Sign Out
                                            </button> 
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <SelectedLicense licenseName={ sessionData.user.user_metadata.license }/>
                                    </div>
                                </div>
                            </div>
                    </div>
                }
            </div>
        </div>
    );
}