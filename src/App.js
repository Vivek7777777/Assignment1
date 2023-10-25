import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Rightsidebar from "./components/Rightsidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Popup /> */}
      <div className="homepage">
        <Sidebar />
        <Main />
        <Rightsidebar />
      </div>
    </div>
  );
}

export default App;
