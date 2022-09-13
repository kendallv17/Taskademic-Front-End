import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
function App() {
  const [hidden, setHidden] = useState(false)
  return (
    <div className="flex min-h-screen bg-mercury-500">
      <Sidebar hidden={ hidden }></Sidebar>
      <div className="h-full flex-auto">
        <Navbar hidden={ hidden } setHidden={ setHidden }></Navbar>
      </div>
    </div>
  );
}

export default App;
