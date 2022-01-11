import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../../services/AuthContext';
import PrivateRoute from '../../services/PrivateRoute';
import Landing from '../../views/Landing/Landing';
// import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
<<<<<<< HEAD
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
=======
import Adminpage from '../../views/AdminPage/Admin';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import { NewUser } from '../NewUser/NewUser';
import { DeleteUser } from '../DeleteUser/deleteuser';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
>>>>>>> 2891e55d8f1dc926b4104ee483dbe0fb31b1d2ec

const App = () => {
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
  

<<<<<<< HEAD
  
  
  
  
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
=======
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Adminpage students={students} />
              </PrivateRoute>
            }
          />
          <Route
            path="/update-profile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/createuser' element={<NewUser onCreate={onUserCreate} />} />
          <Route path='/deleteStudent' element={<DeleteUser students={students} onDelete={onUserDelete} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
>>>>>>> 2891e55d8f1dc926b4104ee483dbe0fb31b1d2ec
  )
};

export default App;