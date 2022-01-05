import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../../services/AuthContext';
import PrivateRoute from '../../services/PrivateRoute';
import Landing from '../../views/Landing/Landing';
// import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Dashboard from '../Dashboard/Dashboard';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import UpdateProfile from '../UpdateProfile/UpdateProfile';

const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
};

export default App;