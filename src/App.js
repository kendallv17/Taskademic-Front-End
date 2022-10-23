import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import { useState } from "react";
function App() {
  const [hidden, setHidden] = useState(true)
  return (
    <div className="flex h-screen bg-mercury-500" id="app">
      <Sidebar hidden={ hidden }></Sidebar>
      <div className="h-full flex-auto">
        <Navbar hidden={ hidden } setHidden={ setHidden }></Navbar>
        Hello world
      </div>
    </div>
  );
}
//Database pwd iPlMXkLYfhnN6DLu
export default App;
