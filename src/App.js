import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div className="flex min-h-screen bg-mercury-500">
      <Sidebar></Sidebar>
      <div className="h-full flex-auto">1</div>
    </div>
  );
}

export default App;
