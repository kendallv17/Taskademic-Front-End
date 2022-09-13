export default function Navbar({hidden, setHidden}){
    return (
    <nav className="bg-blue-dark px-2 sm:px-4 py-2.5 fixed w-full z-20 border-mercury-600 border-l pt-5">
        <div className="container flex flex-wrap justify-start items-center">
            <div className="flex md:order-2" onClick={() => setHidden(!hidden)}>
                <div className="flex text-lg">
                    { !hidden ?                             
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-12 text-mercury-600 hover:text-bright-turquoise-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-12 text-mercury-600 hover:text-bright-turquoise-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    }
                </div>
            </div>
        </div>
    </nav>
    )
}