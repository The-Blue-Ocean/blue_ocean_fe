import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";

import Landing from '../../views/Landing/Landing';
import Adminpage from '../../views/AdminPage/Admin';
import { NewUser } from '../NewUser/NewUser';
import React, { useEffect, useState } from 'react';
import { DeleteUser } from '../DeleteUser/deleteuser';
import axios from 'axios';
import { Student } from '../../views/StudentPage/Student';


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
  const [students, setStudents] = useState([]);
  const [studentID, SetStudentID] = useState('')
  
  
  useEffect(() => {
    axios
    .get('https://blue-ocean-be.uc.r.appspot.com/api/students')
    .then((response) => {
      setStudents(response.data);
      return;
    });
  }, []);

  const onUserDelete = async () => {
    axios
    .get('https://blue-ocean-be.uc.r.appspot.com/api/students')
    .then((response) => {
      setStudents(response.data);
    });
  }

  const onUserCreate = async () => {
    axios
    .get('https://blue-ocean-be.uc.r.appspot.com/api/students')
    .then((response) => {
      setStudents(response.data);
    });
  }
  

  
  
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing data={setStudents} ids={students}/>} />
        <Route path='/home' element={<Adminpage data={setStudents} ids={students} studentID={SetStudentID} />} />
        <Route path='createuser' element={<NewUser onCreate={onUserCreate}/>}/>
        <Route path='/deleteStudent' element={<DeleteUser students={students} onDelete={onUserDelete}/>}/>
        <Route path='/student' element={<Student student={studentID}/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
