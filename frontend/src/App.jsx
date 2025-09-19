import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './Components/SignUp'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'


function App() {
  return (
    <>
<Routes>
  <Route path='/s' element={<SignUp/>}/>
  <Route path='/' element={<Login/>}/>

</Routes>
    </>
  )
}

export default App
