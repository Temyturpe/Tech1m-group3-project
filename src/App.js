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
import {CoursesData, StudentsData, Paydata} from './data'
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";


function App() {
  return (
    
      <div className="App">
            <Router>
              <Routes >
                <Route path='/in/' element={<MainLayout/>}>
                  <Route path="home" element={<Home />} />
                  <Route path="courses" element={<Course cdata = {CoursesData}/>} />
                  <Route path="students" element={<Students sdata = {StudentsData}/>} />
                  <Route path="payments" element={<Payment pdata = {Paydata}/>} />
                  <Route path="quiz" element={<Quiz />} />
                  <Route path="messages" element={<Messages />} />
                </Route>
                <Route path='/login' element={<Login/>} />
                <Route path='/' element={<Welcome/>} />
                <Route path='/signup' element={<SignIn/>} />
                <Route path='/forgotPassword' element={<ForgotPassword/>} />
              </Routes>
            </Router>
      
      
      </div>
  )
 }

export default App;
