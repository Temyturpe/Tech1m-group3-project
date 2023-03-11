import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./pages/Course";
import Messages from "./pages/Messages";
import Payment from "./pages/Payment";
import Quiz from "./pages/Quiz";
import Students from "./pages/Students";

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     <div className="content-box w-full flex">
      <Sidebar/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/courses" element={<Course />} />
       <Route path="/students" element={<Students />} />
       <Route path="/payments" element={<Payment />} />
       <Route path="/quiz" element={<Quiz />} />
       <Route path="/messages" element={<Messages />} />
     </Routes>
     </div>
     </Router>
  )
 }

export default App;
