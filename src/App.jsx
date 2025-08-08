// import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';

function App() {

  return (
    <>
    <Routes>
     <Route path="/" element={<Landing />} />
    </Routes>
    </>
  )
}

export default App
