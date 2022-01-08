import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";

import Landing from '../../views/Landing/Landing';
import { Adminpage } from '../../views/AdminPage/Admin';
import { NewUser } from '../NewUser/NewUser';
import { useEffect, useState } from 'react';
import React from 'react';
import { DeleteUser } from '../DeleteUser/deleteuser';
import axios from 'axios';


const firebaseConfig = {
  apiKey: "AIzaSyBAsoMYxzM46yavU-4Em-1ihbBNWzznvDg",
  authDomain: "blueocean-612b2.firebaseapp.com",
  projectId: "blueocean-612b2",
  storageBucket: "blueocean-612b2.appspot.com",
  messagingSenderId: "43711589559",
  appId: "1:43711589559:web:effcb703d3262364feb132",
  measurementId: "G-TW42PT564X"
};

const App = () => {
  initializeApp(firebaseConfig);
  
  const [idCheck, setID] = useState([]);
  
  useEffect(() => {
    axios
    .get("https://blue-ocean-be.uc.r.appspot.com/api/students")
    .then((response) => {
      setID(response.data)
     
    });
  },[]);
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing data={setID} ids={idCheck}/>} />
      <Route path='/home' element={<Adminpage data={setID} ids={idCheck}/>} />
      <Route path='createuser' element={<NewUser/>}/>
      <Route path='/deleteStudent' element={<DeleteUser students={idCheck}/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
