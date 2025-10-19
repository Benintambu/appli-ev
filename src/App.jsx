import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login'
import Dashboard from './pages/Dashboard';
import Teacher from './pages/Teacher';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login pageTitle={"Connexion Admin"} />}></Route>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/teacher' element={<Teacher />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
