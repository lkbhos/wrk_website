import { useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import Carousel from "./components/Carousel/Carousel"

function App() {
  useEffect(()=>{
    document.title = "โรงพยาบาลลานกระบือ"
  })
  return (
    <>
      <Navbar/>
      <div className="content">
          <div className="banner">
            <div className="backgroung__">
            <Carousel/>
            </div>
          </div>
      </div>
    </>
  )
}

export default App

