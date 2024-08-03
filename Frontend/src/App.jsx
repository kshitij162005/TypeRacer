import { useState } from 'react'
import Navbar1 from './Components/Navbar1.jsx';
import Landing from './Pages/Landing.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/nav' element={<Navbar1/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
