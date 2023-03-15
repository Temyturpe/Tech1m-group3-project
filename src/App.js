import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./pages/Course";
import Messages from "./pages/Messages";
import Payment from "./pages/Payment";
import Quiz from "./pages/Quiz";
import Students from "./pages/Students";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import {AuthProvider} from "./contexts/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    
      <div className="App">
          <div className="content-box w-full flex">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Course />} />
                <Route path="/students" element={<Students />} />
                <Route path="/payments" element={<Payment />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/messages" element={<Messages />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/welcome' element={<Welcome/>} />
                <Route path='/signup' element={<SignIn/>} />
                <Route path='/forgotPassword' element={<ForgotPassword/>} />
              </Routes>
            </Router>
          </div>
      
      
      </div>
  )
 }

export default App;
