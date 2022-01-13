import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../../services/AuthContext';
import PrivateRoute from '../../services/PrivateRoute';
import Landing from '../../views/Landing/Landing';
// import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Student } from '../../views/StudentPage/Student';
import Adminpage from '../../views/AdminPage/Admin';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import { NewUser } from '../NewUser/NewUser';
import { DeleteUser } from '../DeleteUser/deleteuser';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
// import { fetchData } from '../../services/fetchAPI'

const App = () => {
  const [students, setStudents] = useState([]);
  const [studentID, SetStudentID] = useState('')

  // const onUserDelete = async () => {
  //   axios
  //     .get('https://blue-ocean-be.uc.r.appspot.com/api/students')
  //     .then((response) => {
  //       setStudents(response.data);
  //     });
  // }

  // const onUserCreate = async () => {
  //   axios
  //     .get('https://blue-ocean-be.uc.r.appspot.com/api/students')
  //     .then((response) => {
  //       setStudents(response.data);
  //     });
  // }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Adminpage />
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
          <Route
            path="/student"
            element={
              <PrivateRoute>
                <Student />
              </PrivateRoute>
            }
          />
          <Route path='/deleteStudent' element={
            <PrivateRoute>
              <DeleteUser students={students} />
              {/* onDelete={onUserDelete} */}
            </PrivateRoute>}
          />
          <Route path='/createuser' element={
            <PrivateRoute>
              <NewUser />
              {/* onCreate={onUserCreate} */}
            </PrivateRoute>}
          />
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
};

export default App;