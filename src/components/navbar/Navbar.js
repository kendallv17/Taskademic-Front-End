export default function Navbar({hidden, setHidden}){
    return (
    <nav className="bg-blue-dark pl-1 sm:px-4 py-2.5 w-full z-20 border-mercury-600 border-l pt-5 flex">
        <div className="container flex-1 justify-start items-center">
            <div className="flex-1">
                <div className="flex text-lg">
                    { !hidden ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-12 text-mercury-600 hover:text-bright-turquoise-600"  onClick={() => setHidden(!hidden)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-12 text-mercury-600 hover:text-bright-turquoise-600"  onClick={() => setHidden(!hidden)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    }
                </div>
            </div>
        </div>
    </nav>
    )
}