import { useEffect } from "react"
import Navbar from "./components/Navbar"

function App() {
  useEffect(()=>{
    document.title = "โรงพยาบาลลานกระบือ"
  })
  return (
    <>
      <Navbar/>
    </>
  )
}

export default App

