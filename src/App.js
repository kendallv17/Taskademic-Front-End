import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import GetWindowSize from "./utils/GetWindowSize";
import mytasks from "./images/menu/mytasks.jpg"
import Profile from "./images/menu/Profile.jpg"
import PastPeriods from "./images/menu/pastPeriods.jpg"
import NewPeriod from "./images/menu/newPeriod.webp"
import { readSession } from "./utils/SessionManager";
function App() {
  const sessionData = readSession();
  const [hidden, setHidden] = useState(true)
  const [windowSize, setWindowSize] = useState(GetWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(GetWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div className="flex h-screen bg-mercury-500" id="app">
      <Sidebar hidden={ hidden }></Sidebar>
      <div className="h-full flex-auto">
        <Navbar hidden={ hidden } setHidden={ setHidden }></Navbar>
        { windowSize.innerWidth < 768 && !hidden ? <></> :
        <div>
          <h1 className="text-center text-3xl font-bold pt-8 lg:pt-10">Welcome { sessionData.user.user_metadata.first_name }, we are glad to see you!</h1>
          <div className="grid grid-flow-row gap-6 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5">
            <div className="my-8 rounded-2xl shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-3">
              <a href="/current-tasks" className="cursor-pointer">
                <figure>
                  <img src={ mytasks } alt="Go to my tasks"/>
                  <figcaption className="p-4 content-center">
                    <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">Already busy?</p>
                    <small className="text-base leading-5 text-gray-500 dark:text-gray-400" x-text="post.description">Click here to manage your tasks and stay on schedule</small>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="my-8 rounded-2xl shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-3">
              <a href="/add-new-period" className="cursor-pointer">
                <figure>
                  <img src={ NewPeriod } alt="Go to my tasks"/>
                  <figcaption className="p-4">
                    <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300" x-text="post.title">Are you starting a new educational period?</p>
                    <small className="text-base leading-5 text-gray-500 dark:text-gray-400" x-text="post.description">Click here to configure your classes and professors</small>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="my-8 rounded-2xl shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-3">
              <a href="/past-periods" className="cursor-pointer">
                <figure>
                  <img src={ PastPeriods } alt="Go to my tasks"/>
                  <figcaption className="p-4">
                    <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300" x-text="post.title">Do you want to remember some assignments?</p>
                    <small className="text-base leading-5 text-gray-500 dark:text-gray-400" x-text="post.description">Click here to explore your past educational periods</small>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="my-8 rounded-2xl shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-3">
              <a href="/profile" className="cursor-pointer">
                <figure>
                  <img src={ Profile } alt="Go to my tasks"/>
                  <figcaption className="p-4">
                    <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300" x-text="post.title">Check out your profile!</p>
                    <small className="text-base leading-5 text-gray-500 dark:text-gray-400" x-text="post.description"></small>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  );
}
//Database pwd iPlMXkLYfhnN6DLu
export default App;
