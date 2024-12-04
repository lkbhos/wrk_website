import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar/Navbar"
import Footpage from "./components/Footpage/Footpage"
import Home from "./pages/home";
import Moit from "./pages/moit";
import Unauthorized from './pages/Unauthorized';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar/>
          <div className="container__content">
            <div className="bread__"><Breadcrumbs /></div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/moit" element={<Moit/>}/>
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

