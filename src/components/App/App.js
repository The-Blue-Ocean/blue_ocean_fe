import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../../services/AuthContext';
import PrivateRoute from '../../services/PrivateRoute';
// import Landing from '../../views/Landing/Landing';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Dashboard from '../Dashboard/Dashboard';
// import logo from '../../assets/logo.svg';

const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <PrivateRoute path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
};

export default App;