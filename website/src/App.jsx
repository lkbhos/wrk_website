import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar/Navbar"
import Footpage from "./components/Footpage/Footpage"
import Home from "./pages/Home/Home";
import Moit from "./pages/Moit/Moit";
import Unauthorized from './pages/Unauthorized/Unauthorized';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import TakeMoit from "./pages/TakeMoit/TakeMoit";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar/>
          <div className="container__content">
            <div className="bread__"><Breadcrumbs /></div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/moit/:id" element={<Moit/>}/>
                <Route path="/takemoit/:id/:name" element={<TakeMoit/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Navigate to="/unauthorized" />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
              </Routes>
          </div> 
        <Footpage/>
      </Router>
    </HelmetProvider>
  )
}

export default App

