// import "./App.css";
import Footer from "./Components/Footer";
import Navber from "./Components/Navber";
import Hero from "./Components/Hero";

import "./index.css";
import TaskBoard from "./Components/TaskPacket/TaskBoard";
function App() {
  return (
    <div className="bg-[#191D26] h-screen">
      <Navber />
      <Hero />
      <TaskBoard />
      <Footer />
    </div>
  );
}

export default App;
