import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
