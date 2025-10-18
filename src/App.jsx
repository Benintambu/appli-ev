import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login pageTitle={"Connexion Admin"} />}></Route>
          {/*           <Route path='/users' element={<UsersPage />} />
 */}
        </Routes>
      </Router>
    </>
  )
}

export default App
