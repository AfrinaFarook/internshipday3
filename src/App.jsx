import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>MOVIES APP</h1>
    <Navbar/>
    <br></br>
    <Routes>
          <Route path="/" element={<View/>}></Route>
          <Route path="/add" element={<Add/>} ></Route>
    </Routes>
    {/* <View/>
    <Add/> */}

    </>
  )
}

export default App
