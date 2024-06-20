
import React, { createContext, useState , useEffect } from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import "./App.css";
import SignIn from './SignIn';
import LogIn from "./LogIn";
import Landing from "./Landing"
import {auth} from "./firebase"
import { useNavigate } from "react-router-dom";



function App() {

  


  return (
    <>

     <BrowserRouter>
      <Routes>
         <Route path="/" element={<SignIn/>}></Route>
         <Route path="/login" element={<LogIn />}></Route>
         <Route path="/landing" element={<Landing />}></Route>
      </Routes>

     </BrowserRouter>
    </>
  )
}

export default App