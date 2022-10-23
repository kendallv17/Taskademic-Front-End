import { Link } from "react-router-dom";
import { Accordion } from "flowbite-react";
import landing from "../../images/landing.jpg"
export default function Landing(){
    return (
        <div className="text-white w-screen h-full" style={{
            background: 'linear-gradient( 65.5deg,  rgba(23,205,205,1) -15.1%, rgba(23,25,95,1) 71.5% )',
            font:'Source Sans Pro, sans-serif'
        }}>
		<div className="container px-3 flex flex-wrap flex-col md:ml-auto md:flex-row items-center">
			<div className="flex-1 flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
				<p className="uppercase tracking-loose w-full">Are you having troubles organizing your academic asigments?</p>
				<h1 className="my-4 text-5xl font-bold leading-tight">Taskademic is here to help you!</h1>
				<p className="leading-normal text-2xl mb-8">We help you to keep track of assigned tasks so that you can focus on working</p>
				<Link to="/login" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Get started</Link>
			</div>
			<div className="flex-1 w-full md:w-3/5 py-6 text-center">
				<img className="w-full md:w-4/5 z-50 rounded-lg" alt="Board managing"src={landing}/>
			</div>
		</div>
        <section className="w-full">
        <Accordion alwaysOpen={true} class="bg-mercury-500 text-blue-dark-500">
            <Accordion.Panel>
                <Accordion.Title>
                    What is taskademic?
                </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2">
                        Taskademic is a web based application that allow you to manage your academic tasks. It is aimed for students of all ages that are having a bad time keeping up with ther assignments
                    </p>
                    </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
        </section>
	</div>
    );
}