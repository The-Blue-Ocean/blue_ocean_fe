import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../../services/AuthContext';
// import Landing from '../../views/Landing';
import Signup from '../Auth/Signup';
// import logo from '../../assets/logo.svg';

const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
};

export default App;