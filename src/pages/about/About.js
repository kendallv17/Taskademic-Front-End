import about from "../../images/about.jpg"
import Sidebar from "../../components/sidebar/Sidebar";
import GetWindowSize from "../../utils/GetWindowSize";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
export default function About(){
    const [hidden, setHidden] = useState(true)
    const windowSize = GetWindowSize();
    return (
        <div className="flex h-fit">
        <Sidebar hidden={ hidden }></Sidebar>
        <div className="flex-auto flex-col h-full">
            <Navbar hidden={ hidden } setHidden={ setHidden }/>
            {windowSize.innerWidth < 768 && !hidden ?    
                <></>:
                <section class="relative pt-16 bg-blueGray-50">
                <div class="container mx-auto">
                  <div class="flex flex-wrap items-center">
                    <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                      <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                        <img alt="..." src={about} class="w-full align-middle rounded-t-lg"/>
                        <blockquote class="relative p-8 mb-4">
                          <h4 class="text-xl font-bold text-white">
                            Thank you for using taskademic
                          </h4>
                          <p class="text-md font-light mt-2 text-white">
                                To let us know any suggestion or complaints, please contact us at diego.sanches@taskademic.com
                          </p>
                        </blockquote>
                      </div>
                    </div>
                
                    <div class="w-full md:w-6/12 px-4">
                      <div class="flex flex-wrap">
                        <div class="w-full md:w-6/12 px-4">
                          <div class="relative flex flex-col mt-4">
                            <div class="px-4 py-5 flex-auto">
                              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                              </div>
                              <h6 class="text-xl mb-1 font-semibold">Created during 2022 by the taskademic group</h6>
                              <p class="mb-4 text-blueGray-500">
                                <li>Diego Sanchez</li>
                                <li>Kendall Velasquez</li>
                                <li>Abner Lopez</li>
                                <li>Oscar Ortiz</li>
                              </p>
                            </div>
                          </div>
                          <div class="relative flex flex-col min-w-0">
                            <div class="px-4 py-5 flex-auto">
                              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                               </svg>
                              </div>
                              <h6 class="text-xl mb-1 font-semibold">
                                Technologies used
                              </h6>
                              <p class="mb-4 text-blueGray-500">
                                Taskademic uses a modern web development stack consisting of react for
                                the frontend and we decided to use supabase as our main backend service
                                to focuse our efforts on the frontend and Postgres for the source of truth.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="w-full md:w-6/12 px-4">
                          <div class="relative flex flex-col min-w-0 mt-4">
                            <div class="px-4 py-5 flex-auto">
                              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                              </div>
                              <h6 class="text-xl mb-1 font-semibold">Reason for being</h6>
                              <p class="mb-4 text-blueGray-500">
                                We are a mean to solve the student need for a cost effective
                                way to manage academic tasks using a web based environment.
                              </p>
                            </div>
                          </div>
                          <div class="relative flex flex-col min-w-0">
                            <div class="px-4 py-5 flex-auto">
                              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                                </svg>
        
                              </div>
                              <h6 class="text-xl mb-1 font-semibold">What the future hold for us</h6>
                              <p class="mb-4 text-blueGray-500">
                                We wil be expanding our brand based on market demands and user suggestions to
                                create a better app to compete on the same level as our 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </section>


            }
        </div>
    </div>
    );
}