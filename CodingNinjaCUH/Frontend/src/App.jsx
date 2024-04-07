// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import About from './Components/About/About'
import SocialMedia from './Components/SocialMedia/SocialMedia'
import Team from './Components/Team/Team'
import Events from './Components/Events/Events'
import ContactUs from './Components/ContactUs/ContactUs'
import Navbar from './Components/Navbar/Navbar'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='socialmedia' element={<SocialMedia />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/events' element={<Events />} />
          <Route exact path='contactus' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
