import Sidebar from "./components/sidebar/sidebar";
function App() {
  return (
    <div className="flex min-h-full">
      <Sidebar></Sidebar>
      <div className="h-full flex-auto">1</div>
    </div>
  );
}

export default App;
