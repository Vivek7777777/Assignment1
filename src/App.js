import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Rightsidebar from "./components/Rightsidebar";
import { useState } from "react";

function App() {

  const [rank, setRank] = useState("12,890");
  const [percent, setPercent] = useState(37);
  const [correctAnswer, setCorrenctAnswer] = useState(7);

  return (
    <div className="app">
      <Navbar />
      {/* <Popup /> */}
      <div className="homepage">
        <Sidebar />
        <Main
          rank = {rank}
          percent={percent}
          correctAnswer={correctAnswer}
        />
        <Rightsidebar 
          correctAnswer = {correctAnswer}
        />
      </div>
    </div>
  );
}

export default App;
