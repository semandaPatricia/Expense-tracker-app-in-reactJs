import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from "./pages/Profile"
import ForgotPassword from "./pages/ForgotPassword"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Offers from "./pages/Offers"
//import './App.css'

function App() {
  

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/sign-in" element={ <SignIn/> } />
        <Route path="/sign-up" element={ <SignUp/> } />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/offers" element={ <Offers/> } />
        <Route path="/forgot-password" element={ <ForgotPassword/> } />

    
      </Routes>
      <Footer/>
      
    </Router>
  </>
  )
}

export default App
